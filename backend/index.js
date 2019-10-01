const mongoose = require('mongoose');
const Reservation = require('./Schemas/Reservation');
mongoose.Promise = global.Promise;

// Łączę się z bazą danych:
const mongodbUrl = 'mongodb://localhost/localTest';             // DODAĆ POPRAWNY ADRES
mongoose.connect(mongodbUrl, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// Tworzę nowy obiekt na podstawie klasy i dodaję do bazy:
async function addReservation(req, res) {
    const newReservation = new Reservation(req.body);

    try {
        const result = await newReservation.save();
        console.log('Successfully added new reservation');
        res.send(result);
    }
    catch (ex) {
        console.log(ex)
    }
};

module.exports = { addReservation };