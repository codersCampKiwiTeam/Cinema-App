const mongoose = require('mongoose');

// Tworzę nowy schemat:
var userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        maxlength: 50,
        uppercase: true
    },
    lastName: {
        type: String,
        required: true,
        maxlength: 50,
        uppercase: true
    },
    email: {
        type: String,
        required: true,
        maxlength: 50,
        match: /.*@.*/
    },
    phone: {
        type: String,
        required: false,
        maxlength: 16
    }
});

// Tworzę klasę:
const User = mongoose.model('User', userSchema);

// Eksportuję schemat, który będzie użyty w schemacie rezerwacji:
module.exports = userSchema;