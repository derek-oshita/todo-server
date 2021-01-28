// IMPORTS 
const db = require('../models'); 

// INDEX
const index = (req, res) => {
    db.Item.find({}, (err, foundItems) => {
        if (err) console.log('Error in items index: ', err); 
        res.status(200).json(foundItems); 
    });
} 

// CREATE
const create = (req, res) => {
    db.Item.create(req.body, (err, savedItem) => {
      if (err) console.log('Error in items create: ', err);
      res.status(200).json(savedItem);
    });
  };


module.exports = {
    index, 
    create, 
};