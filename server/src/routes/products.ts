import { Router } from 'express';
import { isAdmin } from '../middlewares/auth';
import { productExist } from '../middlewares/productExist';
import { productController } from '../controllers/products';
import { validate } from '../middlewares/validate';
import { addProduct, editProduct } from '../helpers/yup';

/**
 * @swagger
 * components:
 *   schemas:
 *     ProductsData:
 *       type: array
 *       items: 
 *         type: object
 *         properties: 
 *           _id:
 *             type: String
 *             description: ID del producto
 *           name:
 *             type: String
 *             description: Product's name
 *           description:
 *             type: String
 *             description: Product's description
 *           category:
 *             type: String
 *             description: Product's category
 *           thumbnail:
 *             type: String
 *             description: Product's thumbnail url
 *           thumbnail_id:
 *             type: String
 *             description: Product's thumbnail id as reference to the files db
 *           precio:
 *             type: number
 *             description: Product's price (USD)
 *       example: 
 *         -  _id:  6174e458c79d9be056c0fa2s
 *            name: Camiseta Boca Juniors 2021
 *            description:  La nueva camiseta de bokita para este 2021 es lo mas   
 *            category:  Camisetas de Equipos   
 *            thumbnail:  https://todosobrecamisetas.com/wp-content/uploads/tercera-camiseta-adidas-boca-juniors-2021-22-1.jpg 
 *            thumbnail_id:  PRODUCTS/cyth979mt7m83r8rkis1
 *            price:  60
 *         -  _id:  617fe479c79d9be003c0fa25
 *            name: Piluso Boca Juniors
 *            description:  Para ir a la moda toca user este piluso   
 *            category:  Sombreros   
 *            thumbnail:  https://http2.mlstatic.com/D_NQ_NP_958291-MLA40333873535_012020-O.jpg 
 *            thumbnail_id:  PRODUCTS/axhw979mt7m83r8rkihx
 *            price:  10
 *     NewProductInput:
 *       type: object
 *       properties:
 *         nombre:
 *           type: String
 *           description: nombre del producto
 *           example: Camiseta Bokita the biggest
 *         precio:
 *           type: number
 *           description: precio del producto
 *           example: 2000
 */

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
