import {useLoadScript} from "@react-google-maps/api"
import { useState, useEffect, useRef, useCallback } from "react";
import Map from "../components/Map";
import CheckButton from "../components/CheckButton";
import QuestionsService from "../services/QuestionsServices";
import Question from "../components/Question"
import QuestionRoundDisplay from "../components/QuestionRoundDisplay";
import './GameContainer.css';
import RulesPopup from "../components/RulesPopup";


const libraries = ["places"];

const GameContainer = () => {
const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
    });

    const [question, setQuestion] = useState({});
    const [rulePopup, setRulePopup] = useState(false);
    const [checkButton, setCheckButton] = useState(false);
    const [markers, setMarkers] = useState([]);
    const [center, setCenter] = useState({lat: 0, lng: 0});
    const [roundNumber, setRoundNumber] = useState(1);

    useEffect(() => {
        QuestionsService.getQuestion()
        .then(question => setQuestion(question))
    }, [])

    useEffect(() => {
        setQuestion(question)
    }, [question])

    const nextQuestion = () => {
        QuestionsService.getQuestion()
        .then(question => setQuestion(question))
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
        var R = 3958.8; // Radius of the Earth in miles
        var rlat1 = mk1.lat * (Math.PI/180); // Convert degrees to radians
        var rlat2 = mk2.lat * (Math.PI/180); // Convert degrees to radians
        var difflat = rlat2-rlat1; // Radian difference (latitudes)
        var difflon = (mk2.lng-mk1.lng) * (Math.PI/180); // Radian difference (longitudes)
        
        var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
        return d;
        };

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading map";

    return(
        <div className="game-container">
            <QuestionRoundDisplay roundNumber={roundNumber}/>
            <div className="question-map-box">
                <Question question={question}/>
                <Map question={question} checkButton={checkButton} setCheckButton={setCheckButton} markers={markers} setMarkers={setMarkers} center={center} setCenter={setCenter} onMapLoad={onMapLoad}/>
            </div>
            <CheckButton nextRound={nextRound} markers={markers} setMarkers={setMarkers} checkButton={checkButton} setCheckButton={setCheckButton} question={question} setCenter={setCenter} haversineDistance={haversineDistance} mapRef={mapRef} nextQuestion={nextQuestion}/>

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