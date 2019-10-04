const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.options("*", cors({ 
    "origin" : "*",
    "methods" : "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    "allowedHeaders" : "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, x-auth-token"
}));

mongoose.connect('mongodb+srv://KiwiTeam:coderscamp2019@kiwi-cinema-f05fn.mongodb.net/admin?retryWrites=true&w=majority', { 
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