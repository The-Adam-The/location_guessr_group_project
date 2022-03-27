const scoresURL = 'http://127.0.0.1:5000/api/scores/';

const ScoresService = {
    getScores() {
        return fetch(scoresURL)
        .then(res => res.json())
    },

    postScore(payload) {
        return fetch(scoresURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
    }
};

export default ScoresService;