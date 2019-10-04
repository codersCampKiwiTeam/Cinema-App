const {Reservation} = require('../models/Reservation');
const express = require('express');
const router = express.Router();

// pobiera wszystkie rezerwacje
router.get('/', async (req, res) => {
	try {
	  const reservations = await Reservation;
	  res.send(reservations);
	}
	catch(ex) {
        console.log(ex);
        return res.status(500).send('There was an error while processing the request');
    }
});

// dodaje rezerwację
router.post('/', validateReservation, async (req, res) => {
	try {
		reservation = await req.reservation.save();
		res.send(req.reservation);
	}
    catch(ex) {
        console.log(ex);
        return res.status(500).send('There was an error while processing the request');
    }
});

// funkcja middleware, która waliduje poprawność danych dodawanej rezerwacji
async function validateReservation(req, res, next) {
	try {
		if (req.reservation === undefined) {
			req.reservation = new Reservation();
		}

		req.reservation.movie = req.body.movie;
		req.reservation.seansDate = req.body.seansDate;
		req.reservation.seansHour = req.body.seansHour;
        req.reservation.places = req.body.places;
        req.reservation.firstName = req.body.firstName;
        req.reservation.lastName = req.body.lastName;
        req.reservation.email = req.body.email;
        req.reservation.phone = req.body.phone;

		let validationResult = req.reservation.validateInput();

		if (validationResult.error !== undefined) {
			return res.status(400).send(validationResult.error.details.map(i => i.message).join("\r\n"));
		}

		next();
	}
	catch(ex) {
        console.log(ex);
        return res.status(500).send('There was an error while processing the request');
    }
}

module.exports = router;