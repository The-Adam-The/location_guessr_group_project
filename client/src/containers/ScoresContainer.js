import {useState, useEffect} from 'react';

import Header from '../components/Header';
import ScoreBreakdown from "../components/ScoreBreakdown";
import Leaderboard from "../components/Leaderboard";
import './ScoresContainer.css';

const ScoresContainer = ({scores, userScores, displayLogInPage, totalScore}) => {
    const [barFill, setBarFill] = useState(0);

    useEffect(() => {
       setBarFill(Math.round(totalScore.total.averageAccuracy))
       console.log(barFill)

    }, []) 

    return(
        <div className="scores-container">
            <Header/>
            <ScoreBreakdown scores={scores} userScores={userScores} totalScore={totalScore} displayLogInPage={displayLogInPage} barFill={barFill}/>
            <Leaderboard scores={scores}/>
        </div>
    );
};

export default ScoresContainer;