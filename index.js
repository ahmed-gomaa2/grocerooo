import express from 'express'
import methodOverride from 'method-override'
import bodyParser from 'body-parser'
import {upload} from "./models/avatar.js";
import passport from 'passport'
import User from './models/User.js'
import LocalStrategy from 'passport-local'
import session from 'express-session'
import {mongoURI} from "./keys.js";
import mongoose from 'mongoose'

const app = express()

app.use(bodyParser.json())
app.use(methodOverride('_method'))

app.use(session ({
    secret: 'ahmedMahmoud',
    resave:false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

mongoose.connect(mongoURI)

app.post('/upload/avatar', upload.single('file'), (req, res) => {
    res.json(req.body)

    // res.redirect('/')
})

app.post("/api/register", function(req, res){
    const newUser = new User({
        username: req.body.username
    });

    console.log(req.password)

    User.register(newUser, req.body.password, function(err, user){
        if(err){
            res.json(err)
        }
        passport.authenticate("local")(req, res, function(){
            res.send(req.user)
            res.redirect('/')
        });
    });
});

app.post('/api/login', passport.authenticate('local', ), (req, res) => {
    res.send(req.user)
})

app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user)
})

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`The app is listening to:${port}`)
})