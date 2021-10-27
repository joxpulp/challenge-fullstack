import { Router } from 'express';
import { productController } from '../controllers/products';
import { isAdmin, isAuth } from '../middleware/auth';

const router = Router();

router.get('/list/:id?', productController.getProduct);
router.post('/add', isAdmin,productController.addProduct);
router.put('/update/:id', isAdmin,productController.updateProduct);
router.delete('/delete/:id', isAdmin, productController.deleteProduct);

export default router;
