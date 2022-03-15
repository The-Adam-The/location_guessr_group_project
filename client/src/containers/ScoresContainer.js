import ScoreBreakdown from "../components/ScoreBreakdown";
import Leaderboard from "../components/Leaderboard";

const ScoresContainer = ({scores, userScores, displayLogInPage}) => {

    return(
        <div className="scores-container">
            <ScoreBreakdown scores={scores} userScores={userScores}/>
            <Leaderboard scores={scores}/>
            <button onClick={displayLogInPage}>New Game</button>
        </div>
    );
};

export default ScoresContainer;