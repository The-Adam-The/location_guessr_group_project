import Header from '../components/Header';
import ScoreBreakdown from "../components/ScoreBreakdown";
import Leaderboard from "../components/Leaderboard";
import './ScoresContainer.css';

const ScoresContainer = ({scores, userScores, displayLogInPage, totalScore}) => {

    return(
        <div className="scores-container">
            <Header/>
            <ScoreBreakdown scores={scores} userScores={userScores} totalScore={totalScore} displayLogInPage={displayLogInPage}/>
            <Leaderboard scores={scores}/>
        </div>
    );
};

export default ScoresContainer;