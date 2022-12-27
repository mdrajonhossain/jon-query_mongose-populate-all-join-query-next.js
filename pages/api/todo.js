const mongoose = require('mongoose');

const Schema = mongoose.Schema


const todoSchema = new Schema({
    address: String,
    phone: String    
})



const todo = mongoose.model('todo', todoSchema)

module.exports = todo


