import {useLoadScript} from "@react-google-maps/api"
import { useState, useEffect, useRef, useCallback } from "react";
import Map from "../components/Map";
import CheckButton from "../components/CheckButton";
import QuestionsService from "../services/QuestionsServices";
import ScoresService from "../services/ScoresService";
import Question from "../components/Question"
import QuestionRoundDisplay from "../components/QuestionRoundDisplay";
import RulesPopup from "../components/RulesPopup";
import FeedbackOverlay from "../components/FeedbackOverlay";
import './GameContainer.css';


const libraries = ["places"];

const GameContainer = ({displayScoresPage, userName, userScores, setUserScores}) => {
  
    const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
    });

    const [question, setQuestion] = useState({});
    const [questions, setQuestions] = useState([])
    const [rulePopup, setRulePopup] = useState(false);
    const [checkButton, setCheckButton] = useState(false);
    const [markers, setMarkers] = useState([]);
    const [center, setCenter] = useState({lat: 0, lng: 0});
    const [roundNumber, setRoundNumber] = useState(1);

    const [indDistance, setIndDistance] = useState(0);
    const [indAccuracy, setIndAccuracy] = useState(null);
    

    useEffect(() => {
        QuestionsService.getQuestions()
        .then(questions => setQuestions(questions))
    }, [])

    useEffect(() => {
        selectQuestion()
    }, [questions, roundNumber])
    
    const selectQuestion = () => {
        setQuestion(questions[roundNumber-1])
    }  

    const nextRound = () => {
        const temp = roundNumber + 1;
        setRoundNumber(temp)
    }

    // sets the map in reference state so we can use the reference to pan around with the panTo function
    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    // pans using lat and ln of latest marker drop
    const panTo = useCallback(({lat,lng}) => {
        mapRef.current.panTo({lat,lng})
        }, []);

    // makes sure only to pan when choosing answer marker position
    if (markers.length === 1) panTo(markers[0]);


    // this function calculates the distance between two locations with lat and lng values
    const haversineDistance = (mk1, mk2) => {
        let R = 6371.071; // Radius of the Earth in kilometers
        let rlat1 = mk1.lat * (Math.PI/180); // Convert degrees to radians
        let rlat2 = mk2.lat * (Math.PI/180); // Convert degrees to radians
        let difflat = rlat2-rlat1; // Radian difference (latitudes)
        let difflon = (mk2.lng-mk1.lng) * (Math.PI/180); // Radian difference (longitudes)
        
        let d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
        return d;
        };

    // Calculate score
    useEffect(() => {
        if(markers.length === 2) {
            handleCalculation()
        }
    }, [markers])

    const handleCalculation = () => {
        const distance = haversineDistance(markers[0], markers[1]).toFixed(2)
        setIndDistance(distance);
        const calculateAccuracy = () => {
            if(distance <= 5){
                setIndAccuracy(100)
            } else if(distance > 400){
                setIndAccuracy(0)
            } else{
                setIndAccuracy((100-(distance/4.)).toFixed(2))
            }
        }
        calculateAccuracy()
        console.log("calculation made");
    }

    // adds scores object to userScores array
    useEffect(() => {
        if(markers.length === 2) {
            handleUserScores()
        }
    }, [indAccuracy])

    const handleUserScores = () => {
        const indPoints = (indAccuracy * 1.55).toFixed(0)
        const score = {
            questionId: question._id,
            points: indPoints, 
            distance: indDistance, 
            accuracy: indAccuracy
        }
        setUserScores([...userScores, score])
        console.log("socrePosted");
     }

    // calculates averages and posts score object to db
    const postUserScores = () => {
        const calcAvgDistance = ((userScores.map(score => score.distance).reduce((prev, next) => parseFloat(prev) + parseFloat(next))) / 3).toFixed(2);
        const calcAvgAccuracy = ((userScores.map(score => score.accuracy).reduce((prev, next) => parseFloat(prev) + parseFloat(next))) / 3).toFixed(2);
        const totalPoints = ((userScores.map(score => score.points).reduce((prev, next) => parseFloat(prev) + parseFloat(next)))).toFixed(0);
        const score = {
            name: userName,
            scores: userScores,
            total: {
                points: totalPoints,
                averageDistance: calcAvgDistance,
                averageAccuracy: calcAvgAccuracy
            }
        }
        ScoresService.postScore(score)
    }

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading map";

    return(
        <div className="game-container">
            <QuestionRoundDisplay roundNumber={roundNumber}/>
            <div className="question-map-box">
                <Question question={question}/>
                <div className="map-overlay-box">
                    <Map question={question} checkButton={checkButton} setCheckButton={setCheckButton} markers={markers} setMarkers={setMarkers} center={center} setCenter={setCenter} onMapLoad={onMapLoad}/>
                    {checkButton ? <FeedbackOverlay checkButton={checkButton} indDistance={indDistance} indAccuracy={indAccuracy} question={question} />: null}
                </div>
            </div>
           
            <CheckButton setIndAccuracy={setIndAccuracy} roundNumber={roundNumber} displayScoresPage={displayScoresPage} nextRound={nextRound} markers={markers} setMarkers={setMarkers} checkButton={checkButton} setCheckButton={setCheckButton} question={question} setCenter={setCenter} mapRef={mapRef} postUserScores={postUserScores}/>

            <button id="rules-btn" onClick={() => setRulePopup(true)}>Rules</button>
            <RulesPopup trigger={rulePopup} setTrigger={setRulePopup}>
                <h3>Game Rules:</h3>
                <br />
                <p>Drop your pin on the map when you have guessed the location from the clues!</p>
            </RulesPopup>
            
        </div>
    );
};

export default GameContainer;