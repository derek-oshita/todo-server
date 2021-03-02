// IMPORTS
const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 4000; 
const routes = require('./routes'); 
const cors = require('cors'); 
require('dotenv').config(); 


// CORS 
app.use(cors({
    origin: '*', 
    methods: 'GET,POST,PUT,DELETE', 
    optionsSuccessStatus: 200
}))
app.options('*', cors()); 

// MIDDLEWARE JSON PARSING 
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// HOME ROUTE
app.get('/', (req, res) => {
    res.send('MILAAAAAAA')
}); 

// ITEMS ROUTE
app.use('/api/items', routes.items); 

// AUTH 
// ADD CONTROLLER AFTER CREATION 
// app.use('/api/auth'); 

// CONNECTION 
app.listen(port, () => {
    console.log(`Server is listening on ${port}`)
}); 

