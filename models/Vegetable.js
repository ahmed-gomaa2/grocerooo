const mongoose = require('mongoose')

const vegetableSchema = new mongoose.Schema({
    name: String,
    price: String,
    duration: String,
    image: String,
    section: String
})

const Vegetables = mongoose.model('Vegetable', vegetableSchema)

module.exports =  Vegetables;