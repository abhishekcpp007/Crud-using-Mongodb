 const mongoose = require('mongoose')

const ks = new mongoose.Schema({
    name:String,
    salary:Number,
    language: String,
    city:String,
    isManager:Boolean

    
})
 const Employe = mongoose.model('Employe', ks)
    module.exports = Employe