import { useEffect, useState } from 'react';
import LogInContainer from './LogInContainer';
import GameContainer from './GameContainer';
import ScoresContainer from './ScoresContainer';
import ScoresService from '../services/ScoresService';

const MainContainer = () => {

    const [scores, setScores] = useState([]);
    const [page, setPage] = useState('LogInPage')
    const [userName, setUserName] = useState('')

    useEffect(() => {
        ScoresService.getScores()
        .then(scores => setScores(scores))
    }, [page])
    
    const displayLogInPage = () => {
        setPage('LogInPage')
    }

    const displayGamePage = () => {
        setPage('GamePage')
    }

    const displayScoresPage = () => {
        setPage('ScoresPage')
    }

    return(
        <div>
            {page === 'LogInPage' ? <LogInContainer displayGamePage={displayGamePage} setUserName={setUserName}/> : null}
            {page === 'GamePage' ? <GameContainer displayScoresPage={displayScoresPage}/> : null}
            {page === 'ScoresPage' ?<ScoresContainer scores={scores} displayLogInPage={displayLogInPage}/> : null}
        </div>
    );
};

export default MainContainer;