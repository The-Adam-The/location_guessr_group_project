use game;
db.dropDatabase();
db.questions.insertMany(
[
    {
        name: "Graceland",
        question: "Elvis is famous for living in Graceland, where is it?",
        location: {
            place: "Memphis, Tennessee",
            country: "USA",
            coords: {
                lat: 35.046911979511336,
                lng: -90.02262318299292
            },
        },
        imageLink: "https://en.wikipedia.org/wiki/Graceland#/media/File:Graceland_Memphis_Tennessee.jpg"
    },
    {
        name: "Uluru",
        question: "Uluru is located where?",
        location: {
            place: "Petermann",
            country: "Australia",
            coords: {
                lat: -25.343872896318953,
                lng: 131.03718873402815
            },
        },
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Uluru_%28Helicopter_view%29-crop.jpg/1920px-Uluru_%28Helicopter_view%29-crop.jpg"
    },
    {
        name: "Schwarzenegger",
        question: "Where was Arnold Schwarzenegger born??",
        location: {
            place: "Thal",
            country: "Austria",
            coords: {
                lat: 47.07920884032537,
                lng: 15.355120237285893
            },
        },
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg/800px-Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg"
    }
])

db.scores.insertMany(
[
    { 
        name: "Rachel",
        scores: [
            {
                questionId: "622df62ad820f8791c4f35f6",
                points: 75,
                distance: 77.50,
                accuracy: 50
            },
            {
                questionId: "622df62ad820f8791c4f35f7",
                points: 62,
                distance: 102,
                accuracy: 34.19
            },
            {
                questionId: "622df62ad820f8791c4f35f8",
                points: 152,
                distance: 15,
                accuracy: 90.32
            }
        ],
        total: {
            points: 289,
            averageDistance: 64.83,
            averageAccuracy: 58.17
        }
    },
    {
        name: "Caroline",
        scores: [
            {
                questionId: "622df62ad820f8791c4f35f6",
                points: 75,
                distance: 77.50,
                accuracy: 50
            },
            {
                questionId: "622df62ad820f8791c4f35f7",
                points: 62,
                distance: 102,
                accuracy: 34.19
            },
            {
                questionId: "622df62ad820f8791c4f35f8",
                points: 152,
                distance: 15,
                accuracy: 90.32
            }
        ],
        total: {
            points: 289,
            averageDistance: 64.83,
            averageAccuracy: 58.17
        }
    },
    {
        name: "James",
        scores: [
            {
                questionId: "622df62ad820f8791c4f35f6",
                points: 75,
                distance: 77.50,
                accuracy: 50
            },
            {
                questionId: "622df62ad820f8791c4f35f7",
                points: 62,
                distance: 102,
                accuracy: 34.19
            },
            {
                questionId: "622df62ad820f8791c4f35f8",
                points: 152,
                distance: 15,
                accuracy: 90.32
            }
        ],
        total: {
            points: 289,
            averageDistance: 64.83,
            averageAccuracy: 58.17
        }
    },
    {
        name: "Adam",
        scores: [
            {
                questionId: "622df62ad820f8791c4f35f6",
                points: 75,
                distance: 77.50,
                accuracy: 50
            },
            {
                questionId: "622df62ad820f8791c4f35f7",
                points: 62,
                distance: 102,
                accuracy: 34.19
            },
            {
                questionId: "622df62ad820f8791c4f35f8",
                points: 152,
                distance: 15,
                accuracy: 90.32
            }
        ],
        total: {
            points: 289,
            averageDistance: 64.83,
            averageAccuracy: 58.17
        }
    }
])

