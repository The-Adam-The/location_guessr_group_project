const LeaderboardScore = ({score}) => {
    return (
        <li>
            <p>{score.name}:</p>
            <p>Points: {score.total.points}</p>
            <p>Average Distance: {score.total.averageDistance}km</p>
            <p>Average Accuracy: {score.total.averageAccuracy}%</p>

        </li>
    );
}

export default LeaderboardScore;