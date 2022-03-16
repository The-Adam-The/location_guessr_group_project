import {useState, useEffect} from 'react';
import ScoreBreakdown from "../components/ScoreBreakdown";
import Leaderboard from "../components/Leaderboard";
import './ScoresContainer.css';

const ScoresContainer = ({scores, userScores, displayLogInPage, totalScore}) => {
    const [barFill, setBarFill] = useState(0);

    useEffect(() => {
       setBarFill(totalScore.total.averageAccuracy)
       console.log(barFill)

    }, []) 

    return(
        <div className="scores-container">
            <ScoreBreakdown scores={scores} userScores={userScores} totalScore={totalScore} displayLogInPage={displayLogInPage} barFill={barFill}/>
            <Leaderboard scores={scores}/>
        </div>
    );
};

export default ScoresContainer;