import LeaderboardScore from "./LeaderboardScore";

const Leaderboard = ({scores}) => {

    if (!scores || scores.length === 0) {
        return <h2>Waiting for scores...</h2>
    }

    const scoresList = scores.sort((a, b) => b.total.points-a.total.points).map((score, index) => {
        return <LeaderboardScore score={score} key={index} index={index}/>
    })

    return(
        <section className="leaderboard-section">
            <h2>Leaderboard</h2>
                <div className="leaderboard-container">
                    <div className="leaderboard-headers" >
                        <h4>Position</h4>
                        <h4>Name</h4>
                        <h4>Total Points</h4>
                        <h4>Average Distance</h4>
                        <h4>Average Accuracy</h4>
                    </div>
                    <ul className="leaderboard">
                        {scoresList}
                    </ul>
                </div>
        </section>
    );
};

export default Leaderboard;