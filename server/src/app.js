const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const api = require('./routes/api');

const app = express();

//Implementing CORS policy to accept requests only from the client (https://localhost:3000)
app.use(cors({
    origin: 'http://localhost:3000',
}));  

//Implementing logs ('morgan' package) as middleware
app.use(morgan('combined'));

// Middleware for parsing only JSON data    
app.use(express.json());

// Express serving Front End Application, not React anymore (after the front end finished the production and the 'public' folder is saved in the server)
app.use(express.static(path.join(__dirname, '..', 'public')))


app.use('/v1', api);

// Serving index.html as the default page (localhost:8000)
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})


module.exports = app;