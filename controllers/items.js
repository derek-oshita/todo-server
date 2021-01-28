const db = require('../models'); 

const index = (req, res) => {
    db.Item.find({}, (err, foundItems) => {
        if (err) console.log('Error in items index: ', err); 
        res.status(200).json(foundItems); 
    });
} 


module.exports = {
    index, 
};