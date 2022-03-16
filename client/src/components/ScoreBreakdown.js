import dartboard from '../images/dart_with_background.png';
import AccuracyBar from './AccuracyBar';

const ScoreBreakdown = ({userScores, totalScore, displayLogInPage}) => {

    const scoresList = userScores.map((score, index) => {
        return <ul key={index}>
        <h4>Question {index + 1}</h4>
        <li>Points: {score.points}</li>
        <li>Distance from location: {score.distance}km</li>
        </ul>
    })

    
    return(
        <div className="scores-breakdown">
            <div className="scores-left-aside">
                <h2>Score Breakdown</h2>
                    <section className="rounds-breakdown">
                        <ul>
                            {scoresList}
                        </ul>
                    </section>
            </div>
            <div className="scores-aside">
                <section className="totals">
                    <h3 className="total-score-header">Total</h3>
                    <div className="accuracy-box">
                        <p>Accuracy:</p>
                        <AccuracyBar barFill={totalScore.total.averageAccuracy}/>
                    </div>
                    <p className="total-points-label">Points: {totalScore.total.points}</p>
                    <p>Total distance from locations: {totalScore.total.averageDistance}km</p>  
                </section>
                    <p className="image-text" >Not done?</p>
                    <img src={dartboard} alt="dartboard" className='dartboard-image'/>
                    <button onClick={displayLogInPage} className="new-game-button purple-btn">Play again</button>
            </div>
        </div>
    );
};

export default ScoreBreakdown;