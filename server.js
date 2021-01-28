// IMPORTS
const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 3000; 
require('dotenv').config(); 

// HOME ROUTE
app.get('/', (req, res) => {
    res.send('MILAAAAAAAA')
}); 

// CONNECTION 
app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
}); 

