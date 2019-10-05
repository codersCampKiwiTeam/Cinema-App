const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const Reservation = require('./models/Reservation');

app.use(cors());
app.options("*", cors({ 
    "origin" : "*",
    "methods" : "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    "allowedHeaders" : "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, x-auth-token"
}));

//mongoose.connect('mongodb://localhost/localTest')
mongoose.connect('mongodb://KiwiTeam:coderscamp2019@kiwi-cinema-shard-00-00-f05fn.mongodb.net:27017,kiwi-cinema-shard-00-01-f05fn.mongodb.net:27017,kiwi-cinema-shard-00-02-f05fn.mongodb.net:27017/kiwi?ssl=true&replicaSet=kiwi-cinema-shard-0&authSource=admin&retryWrites=true&w=majority', { 
useNewUrlParser: true, useUnifiedTopology: true    
})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...'))
mongoose.set('useCreateIndex', true);

// Express body parser
app.use(express.json());

// Routes
app.use('/reservations', require('./routes/ReservationController.js'));

const PORT = process.env.PORT || 5005;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

//test
async function createTest() {
    const test = new Reservation({
        movie: 'Avengers',
        seansDate: '20-12-2019',
        seansHour: '20:00',
        places: [12],
        firstName: 'Jan',
        lastName: 'Kowalski',
        email: 'kowalski@gmail.com',
        phone: ''
    });
    
    try {
        const result = await test.save();
        console.log(result);
    }
    catch (ex) {
        console.log(ex)
    }
};

createTest();