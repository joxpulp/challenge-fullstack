import { Router } from 'express';
import { cartController } from '../controllers/cart';
import { isAuth } from '../middleware/auth';
import { cartExist } from '../middleware/cartExist';

const router = Router();

router.get('/list/:id_product?', isAuth, cartExist, cartController.getProducts);
router.post('/add/:id_product', isAuth, cartController.addProducts);
router.delete('/delete/:id_product', isAuth, cartController.deleteProducts);

export default router;
