const express = require('express')
const PORT = process.env.PORT || 3001

const app = express()

//Allows for app to listen to specified port.
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

//First argument determines the path. Just a slash means homepage
app.get('/', (req, res) => {
    //In this case, are the server. You receive requests and send responses
    //This is stagnant, meaning it will not change even if you request it
    //Hence why we use nodemon
    res.send("Welcome to my page! I am using Express!")
})

app.get('/favorite-food', (req,res) => {
    res.send('My favorite food is anything truffle pasta')
})

app.get('/favorite-movie', (req,res) => {
    res.send({
        'favorite-movie':'The Sound of Music'
    })
})

app.get('/contact', (req,res) => {
    res.send({
        'phone-number': 3057419621,
        'email': 'abrahamgue02@gmail.com'
    })
})

app.get('/about-me', (req,res) => {
    res.send({
        'fun-facts': [
            'My dog is called Agatha',
            'I am a game developer',
            'I have a degree in vocal performance'
        ]
    })
})

app.get('/movies', (req,res) => {
    res.send({
        movies:[
            {
                'name':'Mary Poppins',
                'releaseYear':1962,
            },
            {
                'name':'The Sound of Music',
                'releaseYear':1965,
            },
            {
                'name':'MEGAN',
                'releaseYear':2023
            }
        ]
    })
})

app.get('/profile/abraham', (req, res) => {
    res.send({
        'name':'Abraham',
        'last-name':'Guerrero',
        'age': 21
    })
})

//using parameters to create dynamic endpoints
//The colon tells the browser something will be input by the user
app.get('/find', (req,res) => {
    console.log(`Query: ${req.query.name}`)
    res.send({
        queries: `You are looking for the ${req.query.name} that is ${req.query.age} years old`
    })
})

app.get('/find/:name', (req,res) => {
    console.log(`Query: ${req.query.age}`)
    res.send({
        msg: `msg with an id of ${req.params.name} found`,
        queries: `You are looking for the ${req.params.name} that is ${req.query.age} hair`
    })
})

//'%20' in urls to make spaces. i.e: 'guitar%20teacher'
app.get('/find/:name/:function', (req,res) => {
    console.log(`Parameter: ${req.params.name}`)
    res.send({
        msg: `msg with an id of ${req.params.name} found`,
        type: `You are using ${req.params.function} mode`
    })
})

//How to handle 404 Errors
app.get('/*', (req,res) => {
    res.send("404 Error! File not found!")
})