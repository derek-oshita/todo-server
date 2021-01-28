// IMPORTS 
const mongoose = require('mongoose'); 
require('dotenv').config()

// MONGODB CONNECTION 
const connectionString = process.env.MONGODB_URI; 
const configOptions = {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
}; 

mongoose.connect(connectionString, configOptions)
    .then(() => console.log('MONGODB successfully connected...'))
    .catch((err) => console.error(`MONGODB ERROR: ${err}`))

module.exports = {
    Item: require('./Item')
}; 