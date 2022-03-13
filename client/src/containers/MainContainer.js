import { useEffect, useState } from 'react';
import LogInContainer from './LogInContainer';
import GameContainer from './GameContainer';
import ScoresContainer from './ScoresContainer';
import ScoresService from '../services/ScoresService';

const MainContainer = () => {

    const [scores, setScores] = useState([]);

    useEffect(() => {
        ScoresService.getScores()
        .then(scores => setScores(scores))
    }, [])

    return(
        <>
            <LogInContainer/>
            <GameContainer/>
            <ScoresContainer scores={scores}/>
        </>
    );
};

export default MainContainer;