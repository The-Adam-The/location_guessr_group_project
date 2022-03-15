import LeaderboardScore from "./LeaderboardScore";

const Leaderboard = ({scores}) => {

    if (!scores || scores.length === 0) {
        return <h2>Waiting for scores...</h2>
    }

    const scoresList = scores.sort((a, b) => b.total.points-a.total.points).map((score, index) => {
        return <LeaderboardScore score={score} key={index}/>
    })

    return(
        <div className="leaderboard-container">
            <h2>Leaderboard</h2>
            <ul className="leaderboard">
                {scoresList}
            </ul>
        </div>
    );
};

export default Leaderboard;