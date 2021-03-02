// IMPORTS
const mongoose = require('mongoose'); 

// ITEM SCHEMA 
const itemSchema = mongoose.Schema({
    title: {
        type: String, 
        required: true, 
    }, 
    body: {
        type: String
    }, 
    completed: {
        type: Boolean
    }, 
    created: {
        type: Date, 
        required: true, 
        default: Date.now, 
    }
}); 

// EXPORTS
const Item = mongoose.model('Item', itemSchema); 
module.exports = Item; 