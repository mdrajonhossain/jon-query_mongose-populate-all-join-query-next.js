const mongoose = require('mongoose');

const Schema = mongoose.Schema


const UseroneSchema = new Schema({
    username: String,
    email: String,
    type: {type:String, enum:["active", "inactive"]},
    todos: [{type: mongoose.Types.ObjectId, ref:"todo"}]
})



const usersonedata = mongoose.model('usersonedata', UseroneSchema)

module.exports = usersonedata