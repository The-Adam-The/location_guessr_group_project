const express = require('express');
const { ReturnDocument } = require('mongodb');
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
            res.json({status: 500, error: error})
        })
    })
    
    //show 
    router.get('/:id', (req, res) => {
        const id = req.params.id;
        collection
        .findOne({_id: ObjectId(id)})
        .then((doc) => res.json(doc))
        .catch((error) => {
            console.error(error)
            res.status(500)
            res.json({status: 500, error: error})
        })
    })

      //show random
      router.get('/randomquestion', (res, req) => {
        collection
        .find()
        .toArray()
        .aggregate([{project: {_id: 1, name: 1, question: 1, location: 1, imageLink: 1} }, {$sample:{size:1}}])
        .then((doc) => res.json(doc))
       
        .catch((error) => {
            console.error(error)
            res.status(500)
            res.json({status: 500, error: error})
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
            res.json({status: 500, error: error})
        })
    })

    // //count questions
    // router.get('/countquestions', (req, res) => {
    //     collection
    //     .count({name: "Uluru"})
    //     .then((doc) => res.json(doc))
    //     .catch((error) => {
    //         console.error(error)
    //         res.status(500)
    //         res.json({status: 500, error: error})
    //     })
    // })
    

    return router

};

module.exports = createRouter;