// IMPORTS
const router = require('express').Router();
const ctrl = require('../controllers');

// ROUTES

// index
router.get('/', ctrl.items.index); 
// create
router.post('/', ctrl.items.create); 
// show
router.get('/:id', ctrl.items.show); 
// update
router.put('/:id', ctrl.items.update); 
// destroy
router.delete('/:id', ctrl.items.destory); 


// EXPORTS 
module.exports = router; 

