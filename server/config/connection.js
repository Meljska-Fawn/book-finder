const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://meli_explores@gmail.com:gDP5ENri7u@cluster0.ow43r5j.mongodb.net/bookFinder?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;
