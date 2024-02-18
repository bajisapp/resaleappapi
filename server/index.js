const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')


const app = express()
app.use(cors())
app.use(express.json());

mongoose.connect("mongodb+srv://resaleappdb:MSdBqW9w0QNPCPph@cluster0.zx2s97u.mongodb.net/resaleappdb17")

app.get("/getUser", (req, res) => {
    UserModel.find({}).then(function(users){
        res.json(users)
    }).catch(function(err){
        res.json(err)
    })

})

app.listen(3010, () => {
    console.log("Server is running balaji")
} )