const ScoreBreakdown = ({userScores, totalScore, displayLogInPage}) => {

    const scoresList = userScores.map((score, index) => {
        return <ul key={index}>
        <h4>Round: {index + 1}</h4>
        <li>Points: {score.points}</li>
        <li>Distance: {score.distance}km</li>
        <li>Accuracy: {score.accuracy}%</li>  
        </ul>
    })
    return(
        <div className="scores-breakdown">
            <section className="rounds-breakdown">
                <h2>Round Breakdown</h2>
                <ul>
                    {scoresList}
                </ul>
            </section>
            <div className="scores-aside">
                <section className="totals">
                    <h3>Total</h3>
                    <p>Accuracy {totalScore.total.averageAccuracy}%</p>
                    <p>{totalScore.total.points} points</p>
                    <p>{totalScore.total.averageDistance}km in total from locations</p>  
                </section>
                <aside className="button-box">
                        <button onClick={displayLogInPage} className="new-game-button">New Game</button>
                </aside>  
            </div>
        </div>
    );
};

export default ScoreBreakdown;