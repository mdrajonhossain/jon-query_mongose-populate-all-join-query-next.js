const mongoose = require('mongoose');

const Schema = mongoose.Schema


const accountSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    address: String,    
    bal: [{type: mongoose.Types.ObjectId, ref:"balance"}]
})



const account = mongoose.model('account', accountSchema)

module.exports = account


