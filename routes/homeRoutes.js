import express from 'express';
import { createProduct, homeRequest, productRequest } from '../controllers/homeController.js';
import { isLogedIn } from '../middlewares/auth.js';


const router = express.Router();

router.get('/', isLogedIn, homeRequest)
router.get('/products', productRequest)
router.post('/products', createProduct)

export default router;
