const mongoose = require("mongoose")

const Userschema = new mongoose.Schema({
    
email: {
    type: String,
    require: true
},

mobile: {
    type: Number,
    require: true
},

password: {
    type: String,
    require: true
},

username: {
    type: String,
    require: true
},

location: {
    type: String,
    require: true
},
})

const UserModel = mongoose.model("users", Userschema)
module.exports = UserModel;