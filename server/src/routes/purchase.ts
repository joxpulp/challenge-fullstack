import { Router } from 'express';
import { purchaseController } from '../controllers/purchase';
import { isAuth } from '../middlewares/auth';
import { cartExist } from '../middlewares/cartExist';

/**
 * @swagger
 * components:
 *   schemas:
 *     PurchasesResponse:
 *       type: object
 *       properties: 
 *         _id:
 *           type: String
 *           description: Purchase History Id
 *           example: 6174e458c79d95e020c0h6h2
 *         userId:
 *           type: String
 *           description: User's Id
 *           example: 6182191a7d9034b287c54c12
 *         purchases:
 *           type: array
 *           items:
 *             type: object
 *             description: Products in cart
 *             properties:
 *               _id:
 *                 type: String
 *                 description: Product's id
 *               name:
 *                 type: String
 *                 description: Product's name
 *               description:
 *                 type: String
 *                 description: Product's description
 *               category:
 *                 type: String
 *                 description: Product's category
 *               thumbnail:
 *                 type: String
 *                 description: Product's thumbnail url
 *               thumbnail_id:
 *                 type: String
 *                 description: Product's thumbnail id
 *               price:
 *                 type: number
 *                 description: Product's price
 *               quantity:
 *                 type: String
 *                 description: Product's quantity
 *           example:
 *             -  _id: 6174e458c79d9be056c0fa2s
 *                name: Camiseta Boca Juniors 2021
 *                description: La nueva camiseta de bokita para este 2021 es lo mas 
 *                category: Camisetas de Equipos   
 *                thumbnail: https://todosobrecamisetas.com/wp-content/uploads/tercera-camiseta-adidas-boca-juniors-2021-22-1.jpg 
 *                thumbnail_id: PRODUCTS/cyth979mt7m83r8rkis1
 *                price: 120
 *                quantity: 2
 *             -  _id: 617fe479c79d9be003c0fa25
 *                name: Piluso Boca Juniors
 *                description: Para ir a la moda toca user este piluso 
 *                category: Sombreros 
 *                thumbnail: https://http2.mlstatic.com/D_NQ_NP_958291-MLA40333873535_012020-O.jpg 
 *                thumbnail_id: PRODUCTS/axhw979mt7m83r8rkihx
 *                price: 10
 *                quantity: 1
 *         createdAt:
 *           type: String
 *           description: Timestamp (when the purchases history was created)
 *           example: 2021-11-12T13:32:57.758Z 
 *         total:
 *           type: Number
 *           description: User's total to be paid (USD)
 *           example: 130
 *         updatedAt:
 *           type: String
 *           description: Timestamp (last update to the purchases history)
 *           example: 2021-11-12T13:32:57.758Z
 *     PurchasesError:
 *       type: object
 *       properties: 
 *         error:
 *           type: String
 *           description: Error message
 *           example: No purchases for this user 
 */

const router = Router();


/**
 * @swagger
 * /orders/getpurchases:
 *   get:
 *     summary: User's purchase history
 *     tags:
 *     - Orders (Protected routes, user must be logged in)
 *     responses:
 *       200:
 *         description: OK, Returns the purchases history of the currently logged in user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PurchasesResponse'
 *       401:
 *         description: Unauthorized, if user is not logged in
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthError'
 *       404:
 *         description: Not Found, if there is no purchases history for the user
 *         content:
 *           application/json:
 *             schema: 
 *               $ref: '#/components/schemas/PurchasesError'
 *
 */

router.get('/getpurchases', isAuth, purchaseController.getProducts);

/**
 * @swagger
 * /orders/purchase:
 *   post:
 *     summary: User's purchase history
 *     tags:
 *     - Orders (Protected routes, user must be logged in)
 *     responses:
 *       200:
 *         description: OK, Returns a success message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg: 
 *                   type: String
 *                   description: Success message
 *                   example: Purchase Completed
 *       401:
 *         description: Unauthorized, if user is not logged in
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthError'
 *       404:
 *         description: Not Found, if the cart doesn't exist
 *         content:
 *           application/json:
 *             schema: 
 *               $ref: '#/components/schemas/CartError'
 *
 */

router.post(
	'/purchase',
	isAuth,
	cartExist,
	purchaseController.purchaseProducts
);

export default router;
