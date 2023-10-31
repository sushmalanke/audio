const express = require("express") 
const mongoose = require("mongoose")
const cors =  require("cors")
const  userModel = require('./schema/user')

const app = express ()
// data from frontend to backend in json
app.use(express.json()) 
app.use(cors())
//connecting monodb with the url
mongoose.connect("mongodb://localhost:27017/user");

app.post('/signup', (req,res) => {
    userModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server runing");
})