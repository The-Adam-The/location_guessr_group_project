const ScoreBreakdown = ({userScores}) => {

    const scoresList = userScores.map((score, index) => {
        return <ul key={index}>
        <h4>Round: {index + 1}</h4>
        <li>Points: {score.points}</li>
        <li>Distance: {score.distance}km</li>
        <li>Accuracy: {score.accuracy}%</li>  
        </ul>
    })
    return(
        <ul>
            <h2>Round Breakdown</h2>
            {scoresList}
        </ul>
    );
};

export default ScoreBreakdown;