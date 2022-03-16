const LeaderboardScore = ({score, index}) => {
    return (
        <li className="leaderboard-list-items">
            <h4 className="leaderboard-position">{index + 1}</h4>
            <p className="player-name">{score.name}</p>
            <p>{score.total.points}</p>
            <p>{score.total.averageDistance}km</p>
            <p>{score.total.averageAccuracy}%</p>
        </li>
    );
}

export default LeaderboardScore;