const express = require('express');
const {
    ReturnDocument
} = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

const createRouter = (collection) => {

    const router = express.Router();

    //index
    router.get('/', (req, res) => {
        collection
            .find()
            .toArray()
            .then((docs) => res.json(docs))
            .catch((error) => {
                console.error(error)
                res.status(500)
                res.json({
                    status: 500,
                    error: error
                })
            })
    })


    //db route for random questions 
    router.get('/random/questions/:id', (req, res) => {
        const id = parseInt(req.params.id);
        collection
        .aggregate(
            [ { $sample: { size: id } } ])
        .toArray()
        .then((doc) => res.json(doc))
        .catch((error) => {
                console.error(error)
                res.status(500)
                res.json({
                    status: 500,
                    error: error
                })
            })
    })

    //show 
    router.get('/:id', (req, res) => {
        const id = req.params.id;
        collection
            .findOne({
                _id: ObjectId(id)
            })
            .then((doc) => res.json(doc))
            .catch((error) => {
                console.error(error)
                res.status(500)
                res.json({
                    status: 500,
                    error: error
                })
            })
    })

    //create
    router.post('/', (req, res) => {
        const newData = req.body;
        collection
            .insertOne(newData)
            .then((result) => res.json(result))
            .catch((error) => {
                console.error(error)
                res.status(500)
                res.json({
                    status: 500,
                    error: error
                })
            })
    })

    return router

};

module.exports = createRouter;