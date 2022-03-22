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

const GameContainer = ({displayScoresPage, userName, userScores, setUserScores, setTotalScore, numberOfRounds}) => {
  
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
        QuestionsService.getQuestions(numberOfRounds)
        .then(questions => setQuestions(questions))
    }, [])

    useEffect(() => {
        
        selectQuestion()
    }, [questions, roundNumber])

    useEffect(() => {
        showQuestion()
    }, [question])
  
    const selectQuestion = () => {
        setQuestion(questions[roundNumber-1])
    }

    const showQuestion = () => {
        if (question) {
            return (
           <Question question={question}/>
            )
        } else {
            return(
                <div>
                    <p>Loading</p>
                </div>
            )
        } 
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
            if(distance <= 10){
                setIndAccuracy(100)
            } else if(distance > 700){
                setIndAccuracy(0)
            } else{
                setIndAccuracy((100-(distance/7.)).toFixed(2))
            }
        }
        calculateAccuracy()
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
     }

    // calculates averages and posts score object to db
    const postUserScores = () => {
        var calcAvgDistance = 0;
        var calcAvgAccuracy = 0;
        var totalPoints = 0;

        console.log(userScores.length)
        if (userScores.length > 1) {
            calcAvgDistance = ((userScores.map(score => score.distance).reduce((prev, next) => parseFloat(prev) + parseFloat(next))) / 3).toFixed(2);
            calcAvgAccuracy = ((userScores.map(score => score.accuracy).reduce((prev, next) => parseFloat(prev) + parseFloat(next))) / 3).toFixed(2);
            totalPoints = ((userScores.map(score => score.points).reduce((prev, next) => parseFloat(prev) + parseFloat(next)))).toFixed(0);

        } else {
            calcAvgDistance = parseFloat(userScores[0].distance).toFixed(2)
            calcAvgAccuracy = parseFloat(userScores[0].accuracy).toFixed(2)
            totalPoints = parseFloat(userScores[0].points).toFixed(0)
        }
        
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
        setTotalScore(score)
    }

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading map";

    return(
        <div className="game-container">
            <article className="question-map-box">
                <section className="question-section">
                    <QuestionRoundDisplay className="question-display" numberOfRounds={numberOfRounds} roundNumber={roundNumber}/>
                    

                    {showQuestion}
                    <Question question={question}/>
                </section>
                <section className="map-section">
                    <div className="map-overlay-box">
                        <Map question={question} checkButton={checkButton} setCheckButton={setCheckButton} markers={markers} setMarkers={setMarkers} center={center} setCenter={setCenter} onMapLoad={onMapLoad}/>
                        {checkButton ? <FeedbackOverlay checkButton={checkButton} indDistance={indDistance} indAccuracy={indAccuracy} question={question} />: null}
                    </div>
                    <nav className="question-buttons">
                        <div className="rules-section">
                            <div className="rules-btn-div">
                                <button className="rules-button" id="rules-btn" onClick={() => {setRulePopup(!rulePopup)}}><span>{rulePopup ? "X" : "?"}</span></button>
                            </div>
                            {rulePopup ? 
                            <RulesPopup className="rules-popup" trigger={rulePopup} setTrigger={setRulePopup}>
                                <h3>Game Rules</h3>
                                <p className="rules-text">Drop your pin on the map when you have guessed the location from the clues!</p>
                            </RulesPopup>
                            : null}
                        </div>
                        <CheckButton className="check-button" numberOfRounds={numberOfRounds} setIndAccuracy={setIndAccuracy} roundNumber={roundNumber} displayScoresPage={displayScoresPage} nextRound={nextRound} markers={markers} setMarkers={setMarkers} checkButton={checkButton} setCheckButton={setCheckButton} question={question} setQuestion={setQuestion} setCenter={setCenter} mapRef={mapRef} postUserScores={postUserScores}/>
                    </nav>
                </section>
            </article>
        </div>
    );
};

export default GameContainer;