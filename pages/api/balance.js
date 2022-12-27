const mongoose = require('mongoose');

const Schema = mongoose.Schema


const balanceSchema = new Schema({
    amount: String,
    total: String    
})



const balance = mongoose.model('balance', balanceSchema)

module.exports = balance


