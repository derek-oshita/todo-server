// IMPORTS 
const db = require('../models'); 

// INDEX
const index = (req, res) => {
    db.Item.find({}, (err, foundItems) => {
        if (err) console.log('Error in items index: ', err); 
        res.status(200).json(foundItems); 
    });
}; 

// SHOW 
const show = (req, res) => {
    db.Item.findById(req.params.id, (err, foundItem) => {
        if (err) console.log('Error in items show: ', err); 
        res.status(200).send(foundItem); 
    }); 
}; 

// CREATE
const create = (req, res) => {
    db.Item.create(req.body, (err, savedItem) => {
      if (err) console.log('Error in items create: ', err);
      res.status(200).json(savedItem);
    });
};

// UPDATE 
const update = (req, res) => {
    db.Item.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedItem) => {
        if (err) console.log('Error in items update: ', err); 

        if (!updatedItem) {
            res.status(400).json({message: `Could not find item with id ${req.params.id}`})
        }; 
        // ensure status 201 works
        res.status(201).json(updatedItem); 
    }); 
}; 

// DESTROY
const destory = (req, res) => {
    db.Item.findByIdAndDelete(req.params.id, (err, deletedItem) => {
        if (err) console.log(err); 
        res.status(200).json(deletedItem); 
    });
}; 


module.exports = {
    index, 
    show, 
    create, 
    update, 
    destory, 
};