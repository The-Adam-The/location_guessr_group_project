import ScoreBreakdown from "../components/ScoreBreakdown";
import Leaderboard from "../components/Leaderboard";

const ScoresContainer = ({scores}) => {

    return(
        <>
            <ScoreBreakdown/>
            <Leaderboard/>
        </>
    );
};

export default ScoresContainer;