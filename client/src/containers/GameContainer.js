import {useLoadScript} from "@react-google-maps/api"
import { useState, useEffect } from "react";
import Map from "../components/map";
import QuestionsService from "../services/QuestionsServices";

const libraries = ["places"];

const GameContainer = () => {
const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
    });

    const [questions, setQuestions] = useState([])
    const [question, setQuestion] = useState({});

    useEffect(() => {
        QuestionsService.getQuestions()
        .then(questions => setQuestions(questions))
    }, [])

    useEffect(() => {
        setQuestion(questions[0])
    }, [questions])
    
    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading map";

    return(
        <>
            <Map question={question}/>
        </>
    );
};

export default GameContainer;