// const express = require('express');
import express from 'express';

const server = express();


server.use(express.json());

const homeRequest = (req, res) => {
    console.log(req.url);

    res.send('Hello World');
}
const productRequest = (req, res) => {

    console.log(req.url);

    res.json({
        products: [
            { id: 1, name: 'Product 1', price: 100 },
            { id: 2, name: 'Product 2', price: 200 },
            { id: 3, name: 'Product 3', price: 300 },
        ]
    });
}
const createProduct = (req, res) => {
    console.log(req.body);
    res.send('Create Product');
}


server.get('/', homeRequest)
server.get('/products', productRequest)
server.post('/products', createProduct)


server.listen(8080, () => {
    console.log("Server is running on port 8080");
})