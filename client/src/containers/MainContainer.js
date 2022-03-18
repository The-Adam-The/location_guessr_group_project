import { useEffect, useState } from 'react';
import LogInContainer from './LogInContainer';
import GameContainer from './GameContainer';
import ScoresContainer from './ScoresContainer';
import ScoresService from '../services/ScoresService';
import Header from '../components/Header';

const MainContainer = () => {

    const [scores, setScores] = useState([]);
    const [page, setPage] = useState('LogInPage')
    const [userName, setUserName] = useState('')
    const [userScores, setUserScores] = useState([]);
    const [totalScore, setTotalScore] = useState({})

    useEffect(() => {
        ScoresService.getScores()
        .then(scores => setScores(scores))
    }, [page])
    
    const displayLogInPage = () => {
        setUserName('')
        setUserScores([])
        setTotalScore({})
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
            <Header/>
            {page === 'LogInPage' ? <LogInContainer displayGamePage={displayGamePage} setUserName={setUserName}/> : null}
            {page === 'GamePage' ? <GameContainer setTotalScore={setTotalScore} displayScoresPage={displayScoresPage} userName={userName} userScores={userScores} setUserScores={setUserScores}/> : null}
            {page === 'ScoresPage' ?<ScoresContainer totalScore={totalScore} scores={scores} displayLogInPage={displayLogInPage} userScores={userScores}/> : null}
        </div>
    );
};

export default MainContainer;