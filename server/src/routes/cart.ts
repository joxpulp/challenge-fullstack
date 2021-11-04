import { Router } from 'express';
import { cartController } from '../controllers/cart';
import { isAuth } from '../middlewares/auth';
import { cartExist } from '../middlewares/cartExist';
import { productExist } from '../middlewares/productExist';

const router = Router();

router.get('/list/:id_product?', isAuth, cartExist, cartController.getProducts);
router.post('/add/:id_product', isAuth, productExist, cartController.addProducts);
router.delete('/delete/:id_product', isAuth, cartExist, cartController.deleteProducts);

export default router;
