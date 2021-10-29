import { Router } from 'express';
import { isAdmin } from '../middlewares/auth';
import { checkBody } from '../middlewares/checkBody';
import { productExist } from '../middlewares/productExist';
import { uploadProduct } from '../services/cloudinary';
import { productController } from '../controllers/products';

const router = Router();

router.get('/list/:id?', productExist, productController.getProduct);
router.post(
	'/add',
	isAdmin,
	uploadProduct.single('thumbnail'),
    checkBody,
	productController.addProduct
);
router.put(
	'/update/:id',
	isAdmin,
	productExist,
	uploadProduct.single('thumbnail'),
	productController.updateProduct
);
router.delete(
	'/delete/:id',
	isAdmin,
	productExist,
	productController.deleteProduct
);

export default router;
