use game;
db.dropDatabase();
db.questions.insertMany(
[
    {
        name: "Graceland",
        question: "Elvis is famous for living in Graceland, where is it?",
        place: "Memphis, Tennessee",
        country: "USA",
        coords: {
            lat: 35.046911979511336,
            lng: -90.02262318299292
        },
        imageLink: "https://en.wikipedia.org/wiki/Graceland#/media/File:Graceland_Memphis_Tennessee.jpg"
    },
    {
        name: "Uluru",
        question: "Uluru is located where?",
        place: "Petermann",
        country: "Australia",
        coords: {
            lat: -25.343872896318953,
            lng: 131.03718873402815
        },
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Uluru_%28Helicopter_view%29-crop.jpg/1920px-Uluru_%28Helicopter_view%29-crop.jpg"
    },
    {
        name: "Schwaznegger",
        question: "Where was Arnorld Schwarznegger born??",
        place: "Thal",
        country: "Austria",
        coords: {
            lat: 47.07920884032537,
            lng: 15.355120237285893
        },
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg/800px-Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg"
    }
])

db.scores.insertMany(
[
    { 
        name: "Rachel",
        score: 30000
    },
    {
        name: "Caroline",
        score: 35000
    },
    {
        name: "James",
        score: 31000
    },
    {
        name: "Adam",
        score: 23000
    }
])

