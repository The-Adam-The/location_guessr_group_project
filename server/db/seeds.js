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
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/5/54/Graceland_Memphis_Tennessee.jpg"
    },
    { 
        name: "Beatles",
        question: "The Beatles are famous for coming from what city?",
        location: {
            place: "Liverpool",
            country: "United Kingdom",
            coords: {
                lat: 53.40518831136327,
                lng: -2.9810293746230516
            },
        },
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/d/df/The_Fabs.JPG"
    },
    { 
        name: "Taj Mahal",
        question: "Where is the Taj Mahal?",
        location: {
            place: "Agra, Uttar Pradesh",
            country: "India",
            coords: {
                lat: 27.17535476245167, 
                lng: 78.04211001154499
            },
        },
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/1280px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg"
    },
    { 
        name: "Lake Ellsworth",
        question: "Where is Lake Ellsworth? (Not USA)",
        location: {
            place: "West Antarctica",
            country: "Antarctica",
            coords: {
                lat: -78.95302926451168, 
                lng: -91.04380789078864
            },
        },
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/2007_mather-lake_hg.jpg/1280px-2007_mather-lake_hg.jpg"
    },
    {
        name: "Tsar Bomb",
        question: "Where did the USSR drop the Tsar bomba in 1961?",
        location: {
            place: "Severny Island, Arkhangelsk Oblast",
            country: "Russia",
            coords: {
                lat: 73.807222, 
                lng: 54.981667
            },
        },
        imageLink: "https://upload.wikimedia.org/wikipedia/en/c/c9/Tsar_photo11.jpg"
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
    },
    {
        name: "Mona Lisa",
        question: "Where is the home of the Mona Lisa?",
        location: {
            place: "Louvre Museum, Paris",
            country: "France",
            coords: {
                lat: 48.86079459806649,
                lng:  2.33761181204535 
            },
        },
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    },
    {
        name: "Hogwarts Express",
        question: "Where is the location of this bridge, famous for being crossed by the Hogwarts Express?",
        location: {
            place: "Glenfinnan Viaduct, Glenfinnan",
            country: "Scotland",
            coords: {
                lat: 56.87638133802642, 
                lng:  -5.431737443534498
            },
        },
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/1/17/Glenfinnan_Viaduct.jpg"
    },
    {
        name: "Grunge",
        question: "Where is the city that is considered to be the birth place of the music genre 'grunge'?",
        location: {
            place: "Seattle, Washington",
            country: "USA",
            coords: {
                lat: 47.607851123598714,
                lng:  -122.33177068638452
            },
        },
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/1/19/Nirvana_around_1992.jpg"
    },
    {
        name: "Sound of Music",
        question: "Which hills are 'alive with the sound of music'?",
        location: {
            place: "Salzburg",
            country: "Austria",
            coords: {
                lat: 47.80960706217608, 
                lng:  13.051966434346307
            },
        },
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/6/62/The_Sound_of_Music_Christopher_Plummer_and_Julie_Andrews.jpg"
    },
    {
        name: "Hobitton",
        question: "Where is Hobitton village?",
        location: {
            place: "Auckland",
            country: "New Zealand",
            coords: {
                lat: -37.85808703945054, 
                lng: 175.68054566233747
            },
        },
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/8/89/Hobbit_holes_reflected_in_water.jpg"
    },
    {
        name: "Mirror",
        question: "Where can you find the world's largest mirror?",
        location: {
            place: "Salar De Uyuni",
            country: "Bolivia",
            coords: {
                lat: -20.13970077949789,
                lng: -67.62774990554094
            },
        },
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Salar_de_Uyuni_2013.jpg"
    },
    {
        name: "Kilimanjaro",
        question: "Where is Mount Kilimanjaro?",
        location: {
            place: "Mount Kilimanjaro National Park",
            country: "Tanzania",
            coords: {
                lat: -3.066738902333098, 
                lng: 37.35567018073739
            },
        },
        imageLink: "https://upload.wikimedia.org/wikipedia/commons/9/91/Mount_Kilimanjaro.jpg"
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

