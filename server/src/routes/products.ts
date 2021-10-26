import { Router } from 'express';
import { productController } from '../controllers/products';

const router = Router();

router.get('/list/:id?', productController.getProduct);
router.post('/add', productController.addProduct);
router.put('/update/:id',productController.updateProduct);
router.delete('/delete/:id', productController.deleteProduct);

export default router;
