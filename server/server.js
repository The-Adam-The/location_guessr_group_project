const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology: true})
    .then((client) => {
        const db = client.db('game');
        const questionsCollection = db.collection('questions');
        const questionsRouter = createRouter(questionsCollection);
        app.use('/api/questions', questionsRouter);
        const scoresCollection = db.collection('scores');
        const scoresRouter = createRouter(scoresCollection);
        app.use('/api/scores', scoresRouter);
    })
    .catch(console.err)

app.listen(5000, function () {
    console.log(`Listening on port ${ this.address().port }`);
});