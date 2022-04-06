'use-strict'

const http = require('http');

require('dotenv').config();

const app = require('./app');
const { mongoConnect } = require ('./services/mongo');
const { loadPlanetsData } = require('./models/planets.model');
const { loadLaunchData } = require('./models/launches.model');

const PORT = process.env.PORT || 8000; // Because 3000 is blocked by the React App 

const server = http.createServer(app);

async function startServer() {
    await mongoConnect();
    await loadPlanetsData();
    await loadLaunchData();

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });  
}

startServer(); 