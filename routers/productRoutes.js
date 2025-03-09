import express from 'express';
import { createProduct, getAllProducts } from '../controllers/productControllers.js';


const router = express.Router();


router.get('/', getAllProducts);
router.post('/', createProduct);
// router.patch('/', updateproduct);
// router.delete('/', deleteProduct);


export default router





// CRUD
// create read update delete
// post get put,patch delete