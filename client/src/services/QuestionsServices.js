const baseURL = 'http://127.0.0.1:5000/api/questions'

const QuestionsService = {
    getQuestions(numberOfRounds) {
        return fetch(baseURL + `/random/questions/${numberOfRounds}`)
               .then(res => res.json())
    }
}


export default QuestionsService