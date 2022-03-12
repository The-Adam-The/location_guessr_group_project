const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = (collection) => {

    const router = express.Router();

    router.get('/', (req, res) => {
        collection
        .find()
        .toArray()
        .then((docs) => res.json(docs))
        .catch((error) => {
            console.error(error)
            res.status(500)
            res.json({status: 500, error: error})
        })
    })

    return router

};

module.exports = createRouter;