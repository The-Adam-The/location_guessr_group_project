import {useLoadScript} from "@react-google-maps/api"
import { useState, useEffect } from "react";
import Map from "../components/Map";
import QuestionsService from "../services/QuestionsServices";

const libraries = ["places"];

const GameContainer = () => {
const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
    });

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading map";

    // const [questions, setQuesions] = useState([])

    // useEffect(() => {
    //     QuestionsService.getQuestions()
    //     .then(questions => setQuesions(questions))
    // }, [])

    return(
        <>
            <Map />
        </>
    );
};

export default GameContainer;