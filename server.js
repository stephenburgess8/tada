//Imports
const express = require ('express')
const morgan = require('morgan')
const bodyParser= require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

// auth.js
const db = require('./db.js')
const passport = require('./auth.js')

const app = express()
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(passport.initialize())
//app.use(passport.session())

// routes.js
app.get('/', (req, res) => {
    // passport.authenticate('basic', { session: false }),
    // function(req, res) {
    //     res.json({ username: req.user.username, email: req.user.emails[0].value })
    // })
    res.sendFile(__dirname + '/client/public/index.html')
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

const port = process.env.PORT || 3000
app.listen(port, function() {
    console.log('listening on 3000')
})
