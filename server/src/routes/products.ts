import { Router } from 'express';
import { isAdmin } from '../middlewares/auth';
import { productExist } from '../middlewares/productExist';
import { uploadProduct } from '../services/cloudinary';
import { productController } from '../controllers/products';
import { validate } from '../middlewares/validate';
import { addProduct, editUser } from '../helpers/yup';

const router = Router();

router.get('/list/:id?', productExist, productController.getProduct);
router.post(
	'/add',
	isAdmin,
	uploadProduct.single('thumbnail'),
	validate(addProduct),
	productController.addProduct
);
router.put(
	'/update/:id',
	isAdmin,
	productExist,
	uploadProduct.single('thumbnail'),
	validate(editUser),
	productController.updateProduct
);
router.delete(
	'/delete/:id',
	isAdmin,
	productExist,
	productController.deleteProduct
);

export default router;
