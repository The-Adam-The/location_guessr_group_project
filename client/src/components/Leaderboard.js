import LeaderboardScore from "./LeaderboardScore";

const Leaderboard = ({scores}) => {

    if (!scores || scores.length === 0) {
        return <h2>Waiting for scores...</h2>
    }

    const scoresList = scores.sort((a, b) => b.total.points-a.total.points).map((score, index) => {
        return <LeaderboardScore score={score} key={index} index={index}/>
    });
    return(
        <section className="leaderboard-section">
            <div className="leaderboard-whole">
                <div className="leader-board-title">
                    <h2>Leaderboard</h2>
                </div>
                    <div className="leaderboard-container">
                        <div className="leaderboard-headers" >
                            <h4 className="position">Position</h4>
                            <h4 className="name">Name</h4>
                            <h4 className="total-points">Total Points</h4>
                            <h4 className="avg-distance">Average Distance</h4>
                            <h4 className="avg-accuracy">Average Accuracy</h4>
                        </div>
                        <ul className="leaderboard">
                            {scoresList}
                        </ul>
                    </div>
                </div>
        </section>
    );
};

export default Leaderboard;