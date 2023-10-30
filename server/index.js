const express = require("express")
const mongoose = require("mongoose")
const cors =  require("cors")
const  userModel = require('./schema/user')

const app = express ()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://localhost:27017/user")

app.post('/', (req,res) => {
    userModel.create(req.body)
    .then(userdetails => res.json(userdetails))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server run");
})