const baseURL = 'http://127.0.0.1:5000/api/questions'

const QuestionsService = {
    getQuestion() {
        return fetch(baseURL + '/random/question')
               .then(res => res.json())

    }
}

export default QuestionsService