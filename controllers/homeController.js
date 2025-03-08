export const homeRequest = (req, res) => {
    console.log(req.url);

    res.send('Hello World');
}

export const productRequest = (req, res) => {

    console.log(req.url);

    res.json({
        products: [
            { id: 1, name: 'Product 1', price: 100 },
            { id: 2, name: 'Product 2', price: 200 },
            { id: 3, name: 'Product 3', price: 300 },
        ]
    });
}


export const createProduct = (req, res) => {
    console.log(req.body);
    res.send('Create Product');
}