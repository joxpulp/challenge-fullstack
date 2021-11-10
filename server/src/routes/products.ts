import { Router } from 'express';
import { isAdmin } from '../middlewares/auth';
import { productExist } from '../middlewares/productExist';
import { productController } from '../controllers/products';
import { validate } from '../middlewares/validate';
import { addProduct, editProduct } from '../helpers/yup';

const router = Router();

router.get('/list/:id?', productExist, productController.getProduct);
router.post(
	'/add',
	isAdmin,
	validate(addProduct),
	productController.addProduct
);
router.put(
	'/update/:id',
	isAdmin,
	productExist,
	validate(editProduct),
	productController.updateProduct
);
router.delete(
	'/delete/:id',
	isAdmin,
	productExist,
	productController.deleteProduct
);

export default router;
