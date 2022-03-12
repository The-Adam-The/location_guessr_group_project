const baseURL = 'http://127.0.0.1:5000/api/questions/'

const QuestionsService = {
    getQuestions() {
        return fetch(baseURL)
               .then(res => res.json())

    }
}

export default QuestionsService