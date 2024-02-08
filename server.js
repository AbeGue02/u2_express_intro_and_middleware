const express = require('express')
const cors = require('cors')

//Import controllers
const catController = require('./controllers/CatController')
const dogController = require('./controllers/DogController')


const PORT = process.env.PORT || 3001
const app = express()

//Express Middleware is the core concept of Express and it allows us to handle different conditions during req/res lifecycle. Makes our code more modular
//An example of middleware would be a login flag.
app.use(cors()) //Allows us to use third party packages
app.use(express.json()) //Allows us to send information to our server
app.use(express.urlencoded({extended: false})) //Sends encoded forms of our server

//Building out own Middleware
app.get('/middleware', 
    (req, res, next) => {
        console.log("This is middleware")
        //Find out data
        next()
    },
    (req, res) => {
        //Render said data
        res.send("response completed")
    }
)

//Allows for app to listen to specified port.
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

//First argument determines the path. Just a slash means homepage
app.get('/', (req, res) => {
    //In this case, are the server. You receive requests and send responses
    //This is stagnant, meaning it will not change even if you request it
    //Hence why we use nodemon
    res.send({
        msg: "Server Running"
    })
})

app.get('/cats', catController.getCats)

app.get('/cats/:id', catController.getCat)

app.get('/dogs', dogController.getDogs)

app.get('/dogs/:id', dogController.getDogByID)

// app.get('/dogs', (req,res) => {
//     res.send("My favorite dog breed is maltese because of Agatha")
// })

// app.get('/cats/:catsName', (req,res) => {
//     res.send(`A cat could be named ${req.params.catsName}`)
// })

app.post('/towns', (req,res) => {
    res.send({
        hometown: "Santa Rita"
    })
})

app.put('/profile/update/:username', (req,res) => {
    res.send(`User profile with the username of ${req.params.username} was updated`)
})

app.delete('/tacos', (req, res) => {
    res.send({
        msg: `I deleted your taco of type ${req.query.type} of id ${req.query.tacoId} `,
    })
})

//How to handle 404 Errors
app.get('/*', (req,res) => {
    res.send("404 Error! File not found!")
})