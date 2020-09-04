//Imports
const express = require ('express')
const morgan = require('morgan')
const bodyParser= require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

// auth.js
const MongoClient = require('mongodb').MongoClient
const uri = `mongodb+srv://${process.env.mongouser}:${process.env.mongopass}@${process.env.mongocluster}.amsqv.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()
app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
//app.use(passport.session())

const jwt = require("express-jwt")
const jwksRsa = require("jwks-rsa")
const jwtCheck = jwt({
      secret: jwksRsa.expressJwtSecret({
          cache: true,
          rateLimit: true,
          jwksRequestsPerMinute: 5,
          jwksUri: 'https://dev-jgoxkuks.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'localhost:8080',
    issuer: 'https://dev-jgoxkuks.us.auth0.com/',
    algorithms: ['RS256']
})


// routes.js
app.get('/', jwtCheck, (req, res) => {
    console.log('fs')
    // passport.authenticate('basic', { session: false }),
    // function(req, res) {
    //     res.json({ username: req.user.username, email: req.user.emails[0].value })
    // })
    res.sendFile(__dirname + '/client/public/index.html')
})


app.get('/api/todos/:id', jwtCheck, (req, res) => {
    const id = Number(req.params.id);
    const todos = todos.find(todo => todo.id === id);
    res.send(todo);
});

app.get('/api/todos', jwtCheck,  async (req, res) => {
    getTodos(req).catch(console.dir)
    
});

app.post('/api/todos', jwtCheck, async (req, res, next) => { 
    console.log(req) 
    addTodo(req).catch(console.dir)
})

async function addTodo(req) {
    try {
        await client.connect()
        console.log("Connected to server")
        const db = client.db("todos")
        const col = db.collection('todoitems')
        const response = await col.insertOne(req.body)
        console.log(response)
    } finally {
        await client.close()
    }
}


async function getTodos(req) {
    try {
        await client.connect()
        console.log("Connected to server")
        const db = client.db("todos")
        const col = db.collection('todoitems')
        const response = await col.find()
        console.log(response)
    } finally {
        await client.close()
    }
}

const port = process.env.PORT || 3000
app.listen(port, function() {
    console.log('listening on ' + port)
})
