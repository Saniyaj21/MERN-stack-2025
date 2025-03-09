import { Product } from "../models/productModel.js";

export const getAllProducts = async(req, res)=>{
    try {
        const products = await Product.find()

        

        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export const createProduct = async(req, res)=>{
    try {
      console.log(req.body);
      const {name, price, description } = req.body;
      const product = await Product.create({
        name,
        price,
        description,
      })
      

        

        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}