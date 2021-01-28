// IMPORTS
const router = require('express').Router();
const ctrl = require('../controllers');

// ROUTES
router.get('/', ctrl.items.index); 

router.post('/', ctrl.items.create); 

// EXPORTS 
module.exports = router; 

