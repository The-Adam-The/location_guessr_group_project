const LeaderboardScore = ({score}) => {
    return (
        <li>
            <p>Name: {score.name}</p>
            <p>Score: {score.score}</p>
        </li>
    );
}

export default LeaderboardScore;