import {useState, useEffect} from 'react';
import ScoreBreakdown from "../components/ScoreBreakdown";
import Leaderboard from "../components/Leaderboard";
import './ScoresContainer.css';

const ScoresContainer = ({scores, userScores, displayLogInPage, displayGamePage, totalScore}) => {
    const [barFill, setBarFill] = useState(0);

    useEffect(() => {
       setBarFill(totalScore.total.averageAccuracy)
       console.log(barFill)

    }, []) 

    return(
        <div className="scores-container">
            <div className="scores-content">
                <ScoreBreakdown scores={scores} userScores={userScores} totalScore={totalScore} displayLogInPage={displayLogInPage} displayGamePage={displayGamePage} barFill={barFill}/>
                <Leaderboard scores={scores}/>
            </div>
        </div>
    );
};

export default ScoresContainer;