// IMPORTS
const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 4000; 
const routes = require('./routes'); 
require('dotenv').config(); 


// MIDDLEWARE JSON PARSING 
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// HOME ROUTE
app.get('/', (req, res) => {
    res.send('MILAAAAAAA')
}); 

// ITEMS ROUTE
app.use('/api/items', routes.items); 

// CONNECTION 
app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
}); 

