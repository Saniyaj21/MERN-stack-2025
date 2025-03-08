// const express = require('express');
import express from 'express';


// routes
import homeRouter from './routes/homeRoutes.js'

const server = express();

server.use(express.json());
server.use('/api', homeRouter)



server.listen(8080, () => {
    console.log("Server is running on port 8080");
})