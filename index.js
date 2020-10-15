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
import {gfs} from './models/avatar.js'

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


app.post("/api/register", function(req, res){
    User.findOne({email: req.body.email}).then(user => {
        if(user) {
            res.send({message: 'A user with the same email exists'})
        }else {
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                // file: req.body.file
            });
            User.register(newUser, req.body.password, function(err, user){
                if(err){
                    res.send(err)
                }
                passport.authenticate("local")(req, res, function(){
                    res.send(req.user)
                });
            });
        }
    })
});

app.post('/api/login', passport.authenticate('local', ), (req, res) => {
    res.send(req.user)
})

app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user)
})

app.post('/api/avatar', upload.single('file'), (req, res) => {
    res.send(req.file)
})


app.post('/api/edit', function (req, res, next) {

    User.update({_id: req.user._id}, {file: req.body.file}, (err) => {
        if (err) console.log(err);
        res.send(req.user)
    });
});

app.get('/api/image/:filename', (req, res) => {
    gfs.files.findOne({filename: req.params.filename}, (err, file) => {
        if(!file || file.length === 0) {
            res.status(404).json({
                err: 'no file exists'
            })
        }

        if(file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
            const readStream = gfs.createReadStream(file.filename)
            readStream.pipe(res)
        }else {
            res.status(404).json({
                err: 'not an image'
            })
        }
    })
})

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`The app is listening to:${port}`)
})