const mongoose = require('mongoose');

// Tworzę nowy schemat:
var reservationSchema = new mongoose.Schema({
    movie: {
        type: String,
        required: true
    },
    seansDate: {
        type: String,
        required: true
    },
    seansHour: {
        type: String,
        required: true
    },
    places: {
        type: Array,
        validate: {
            validator: function(v) {
                return v && v.length > 0;
            },
            message: 'Musisz wybrać przynajmniej jedno miejsce.'
        }
    },
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

// Na podstawie schematu tworzę Klasę dla danej kolekcji:
const Reservation = mongoose.model('Reservation', reservationSchema);

// Eksportuję klasę, na podstawie której będzie tworzony nowy obiekt dodawany do bazy:
module.exports = Reservation;