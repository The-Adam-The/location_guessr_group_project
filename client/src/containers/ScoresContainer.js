import ScoreBreakdown from "../components/ScoreBreakdown";
import Leaderboard from "../components/Leaderboard";

const ScoresContainer = ({scores}) => {

    return(
        <div className="scores-container">
            <ScoreBreakdown scores={scores}/>
            <Leaderboard scores={scores}/>
        </div>
    );
};

export default ScoresContainer;