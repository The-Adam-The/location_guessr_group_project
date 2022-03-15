import ScoreBreakdown from "../components/ScoreBreakdown";
import Leaderboard from "../components/Leaderboard";

const ScoresContainer = ({scores, userScores}) => {

    return(
        <div className="scores-container">
            <ScoreBreakdown scores={scores} userScores={userScores}/>
            <Leaderboard scores={scores}/>
        </div>
    );
};

export default ScoresContainer;