const LeaderboardScore = ({score, index}) => {
    return (
        <li className="leaderboard-list-items">
            <h4 className="leaderboard-position">{index + 1}</h4>
            <p className="player-name">{score.name}</p>
            <p className="player-total-points">{score.total.points}</p>
            <p className="player-avg-distance">{score.total.averageDistance}km</p>
            <p className="player-avg-accuracy">{score.total.averageAccuracy}%</p>
        </li>
    );
};

export default LeaderboardScore;