// Path 
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Dotnev Config 
dotenv.config();

// Connect 
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database Connected Successfully');
    } catch (error) {
        throw error
    };
};  

module.exports = connect;