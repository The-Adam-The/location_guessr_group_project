import LeaderboardScore from "./LeaderboardScore";

const Leaderboard = ({scores}) => {

    if (!scores || scores.length === 0) {
        return <h2>Waiting for scores...</h2>
    }

    const scoresList = scores.map((score, index) => {
        return <LeaderboardScore score={score} key={index}/>
    })

    return(
        <>
            <h2>Leaderboard</h2>
            <ul>
                {scoresList}
            </ul>
        </>
    );
};

export default Leaderboard;