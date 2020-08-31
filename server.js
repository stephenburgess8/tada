//Imports
const express = require ('express')
const bodyParser= require('body-parser')
const dotenv = require('dotenv')
dotenv.config()

// auth.js
const passport = require('passport')
var Strategy = require('passport-http').BasicStrategy;
passport.use(new Strategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err) }
      if (!user) { return done(null, false) }
      if (!user.validPassword(password)) { return done(null, false) }
      return done(null, user)
    })
  }
))

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize())
app.use(passport.session())

// db.js
const MongoClient = require('mongodb').MongoClient
const uri = `mongodb+srv://${process.env.mongouser}:${process.env.mongopass}@${process.env.mongocluster}.amsqv.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// routes.js
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/todos', async (req, res, next) => {   
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

app.get('/', function(req, res) {
    res.render('home', { user: req.user })
})

app.get('/login', function(req, res){
    res.render('login')
})
  
app.post('/login', 
    passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/')
})
  
app.get('/logout',
    function(req, res){
        req.logout()
        res.redirect('/')
})


app.listen(3000, function() {
    console.log('listening on 3000')
})
