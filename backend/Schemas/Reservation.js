const mongoose = require('mongoose');
const userSchema = require('./User');

// Tworzę nowy schemat:
var reservationSchema = new mongoose.Schema({
    movie: {
        type: String,
        required: true
    },
    seansDate: {
        type: Date,
        required: true
    },
    seansHour: {
        type: Number,
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
    user: userSchema
});

// Na podstawie schematu tworzę Klasę dla danej kolekcji:
const Reservation = mongoose.model('Reservation', reservationSchema);

// Eksportuję klasę, na podstawie której będzie tworzony nowy obiekt dodawany do bazy:
module.exports = Reservation;