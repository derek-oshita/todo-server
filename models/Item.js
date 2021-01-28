// IMPORTS
const mongoose = require('mongoose'); 

// ITEM SCHEMA 
const itemSchema = mongoose.Schema({
    text: {
        type: String, 
        required: true, 
    }
}); 

// EXPORTS
const Item = mongoose.model('Item', itemSchema); 
module.exports = Item; 