import {useState, useEffect} from 'react';
import ScoreBreakdown from "../components/ScoreBreakdown";
import Leaderboard from "../components/Leaderboard";
import './ScoresContainer.css';

const ScoresContainer = ({scores, userScores, displayLogInPage, totalScore}) => {
    const [barFill, setBarFill] = useState(0);

    useEffect(() => {
       setBarFill(totalScore.total.averageAccuracy)
    }, []) 

    return(
        <div className="scores-container">
            <div className="scores-content">
                <ScoreBreakdown userScores={userScores} totalScore={totalScore} displayLogInPage={displayLogInPage} barFill={barFill}/>
                <Leaderboard scores={scores}/>
            </div>
        </div>
    );
};

export default ScoresContainer;