import {useLoadScript} from "@react-google-maps/api"
import { useState, useEffect } from "react";
import Map from "../components/Map";
import QuestionsService from "../services/QuestionsServices";
import Question from "../components/Question"
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

    useEffect(() => {
        QuestionsService.getQuestion()
        .then(questions => setQuestion(questions))
    }, [])

    useEffect(() => {
        setQuestion(question)
    }, [question])

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading map";

    return(
        <div className="game-container">
            <Map question={question} checkButton={checkButton} setCheckButton={setCheckButton}/>
            <Question question={question}/>
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