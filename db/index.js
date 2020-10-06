const mongoose = require('mongoose');

mongoose
    .connect( "mongodb+srv://yaron93:102030ya@cluster0.5fsow.mongodb.net/Tilok?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology:true })
    .catch(e => {
        console.error('Connection error', e.message)
    });
const db = mongoose.connection;

module.exports = db;

