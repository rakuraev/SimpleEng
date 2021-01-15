const express = require("express")
const mongoose = require('mongoose')
const passport = require('passport')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const wordsRoutes = require('./routes/words')
const keys = require('./config/keys')
const cansola = require('consola')
const app = express()


mongoose.connect(keys.mongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
})
.then(()=>console.log('MongoDB connected'))
.catch((err)=>console.log(err))

app.use(passport.initialize()) 
require('./middleware/passport')(passport)
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/api/auth',authRoutes)
app.use('/api/words',wordsRoutes)
module.exports = app