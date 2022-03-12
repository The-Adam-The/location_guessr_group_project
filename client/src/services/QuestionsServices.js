const baseURL = 'http://127.0.01/api/questions/'

const QuestionsService = {
    getQuestions() {
        return fetch(baseURL)
               .then(res => res.json())

    }
}

export default QuestionsService