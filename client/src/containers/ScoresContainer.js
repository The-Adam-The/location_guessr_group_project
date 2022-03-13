import ScoreBreakdown from "../components/ScoreBreakdown";
import Leaderboard from "../components/Leaderboard";

const ScoresContainer = ({scores}) => {

    return(
        <>
            <ScoreBreakdown scores={scores}/>
            <Leaderboard scores={scores}/>
        </>
    );
};

export default ScoresContainer;