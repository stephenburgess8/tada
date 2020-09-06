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
const ObjectID = require('mongodb').ObjectID
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()
app.use(morgan('tiny'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('client/dist'))
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
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/dist/index.html')
})


app.get('/api/todo/:id', jwtCheck, (req, res) => {
    getTodo(req, res, req.params.id).catch(console.dir)
});

app.delete('/api/todo/:id', jwtCheck, (req, res) => {
    deleteTodo(req, res, req.params.id).catch(console.dir)
});

app.get('/api/todos', jwtCheck,  async (req, res) => {
    getTodos(req, res).catch(console.dir)
    
});

app.post('/api/todos', jwtCheck, async (req, res, next) => { 
    addTodo(req, res).catch(console.dir)
})

async function deleteTodo(req, res, id) {
    try {
        await client.connect()
        console.log("Connected to server")
        const _id = new ObjectID(id)
        const db = client.db("todos")
        const col = db.collection('todoitems')
        const response = await col.remove({user_id: req.headers.user, _id: _id})
        res.send(response)
    } finally {
    }
}

async function getTodo(req, res, id) {
    try {
        await client.connect()
        console.log("Connected to server")
        const _id = new ObjectID(id)
        const db = client.db("todos")
        const col = db.collection('todoitems')
        const response = await col.findOne({user_id: req.headers.user, _id: _id})
        res.send(response)
    } finally {
    }
}

async function addTodo(req, res) {
    try {
        const data = {
            ...req.body,
            user_id: req.headers.user
        }
        await client.connect()
        console.log("Connected to server")
        const db = client.db("todos")
        const col = db.collection('todoitems')
        const response = await col.insertOne(data)
        res.send(response)
    } finally {
    }
}


async function getTodos(req,res) {
    try {
        await client.connect()
        console.log("Connected to server")
        const db = client.db("todos")
        const col = db.collection('todoitems')
        const response = await col.find({user_id:req.headers.user}).toArray()
        res.send(response)
    } finally {
    }
}

const port = process.env.PORT || 3000
app.listen(port, function() {
    console.log('listening on ' + port)
})
