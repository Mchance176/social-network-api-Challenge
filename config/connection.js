const mongoose = require('mongoose');

// Wrap mongoose around local connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkDB');

// Export connection 
const db = mongoose.connection;

// Log connection status
db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('Connected to MongoDB!'));

module.exports = db; 