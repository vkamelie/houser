const express = require('express');
const app = express();

//sockets
const server = require('http').Server(app);
const io = require('socket.io')(server);

const massive = require('massive');
const session = require("express-session");
const uC = require('./controllers/userController');

require('dotenv').config()

function sessionCheck(req, res, next) {
    if(req.session.user) {
        next()
    } else {
        res.status(401).send('You must login')
    }
}

 io.on('connection', function(socket){
    console.log('made socket connection')
})

const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env

console.log(SESSION_SECRET)
app.use(express.json());
massive(CONNECTION_STRING).then(db =>{
    app.set('db', db)
    db.init();
    console.log('Connceted to DB')
})

app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 *24 *14
        }
    })
)

// app.route('/api/signup')
// .post(uC.signup)
app.post('/api/login', uC.login) 
app.post('/api/user_register', uC.signup)

app.use(sessionCheck);

app.get('/api/logout', (req, res) =>{
    res.session.destory();
    res.sendStatus(200);
})

app.get("/api/user", (req, res) => {
    res.status(200).send(req.session.user)
})








server.listen(SERVER_PORT || 4000, () => {
    console.log(`Rhianna says Work on ${SERVER_PORT}`)
})

