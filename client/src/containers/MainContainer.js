import { useEffect, useState, createContext } from 'react';
import LogInContainer from './LogInContainer';
import GameContainer from './GameContainer';
import ScoresContainer from './ScoresContainer';
import ScoresService from '../services/ScoresService';
import Header from '../components/Header';

const MainContainer = () => {

    const Context = createContext(0)
    const [numberOfRounds, setNumberOfRounds] = useState(3);
    const [userName, setUserName] = useState('');
    const [userScores, setUserScores] = useState([]);
    const [totalScore, setTotalScore] = useState({});
    const [page, setPage] = useState('LogInPage');
    const [scores, setScores] = useState([]);

    useEffect(() => {
        ScoresService.getScores()
        .then(scores => setScores(scores))
    }, [totalScore])
    
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

    const newGame = () => {
        setUserScores([])
        displayGamePage()
    }

    return(
        
        <div>
            <Context.Provider numberOfRounds={numberOfRounds} >
                <Header/>
                {page === 'LogInPage' ? <LogInContainer displayGamePage={displayGamePage} setUserName={setUserName}/> : null}
                {page === 'GamePage' ? <GameContainer setTotalScore={setTotalScore} displayScoresPage={displayScoresPage} userName={userName} userScores={userScores} setUserScores={setUserScores}/> : null}
                {page === 'ScoresPage' ?<ScoresContainer totalScore={totalScore} scores={scores} displayLogInPage={displayLogInPage} newGame={newGame} userScores={userScores}/> : null}
                
            </Context.Provider>
        </div>
    );
};

export default MainContainer;