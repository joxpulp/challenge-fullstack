import { Router } from 'express';
import { authController } from '../controllers/auth';
import { isAuth } from '../middlewares/auth';
import { validate } from '../middlewares/validate';
import { editUser, login, signup } from '../helpers/yup';

/**
 * @swagger
 * components:
 *   schemas:
 *     LoginBody:
 *       type: object
 *       properties:
 *         email:
 *           type: String
 *           description: User's email (must be a valid email)
 *           example: bokitforever@gmail.com
 *           required: true
 *         password:
 *           type: String
 *           description: User's password (min. 8 characters)
 *           example: bokitaforever
 *           required: true
 *     EditUser:
 *       type: object
 *       properties: 
 *         name:
 *           type: String
 *           description: User's name
 *         lastname:
 *           type: String
 *           description: User's description
 *         age:
 *           type: Number
 *           description: User's category
 *         cardId:
 *           type: Number
 *           description: User's cardId (DNI)
 *         address:
 *           type: String
 *           description: User's address
 *         avatar:
 *           type: file
 *           format: binary
 *           description: User's avatar img (Only .png jpeg jpg)
 *     LoginResponse:
 *       type: object
 *       properties: 
 *         _id:
 *           type: String
 *           description: User's Id
 *         name:
 *           type: String
 *           description: User's name
 *         lastname:
 *           type: String
 *           description: User's description
 *         age:
 *           type: Number
 *           description: User's category
 *         cardId:
 *           type: Number
 *           description: User's cardId (DNI)
 *         address:
 *           type: String
 *           description: User's address
 *         avatar:
 *           type: String
 *           description: User's avatar url
 *       example: 
 *         _id:  6174e458c79d9be056c0fa2s
 *         name: Pepito
 *         lastname:  Bombonera   
 *         age:  27  
 *         cardId:  20548236 
 *         address:  Av. Rivadavia 2354 
 *         avatar:  https://todosobrecamisetas.com/wp-content/uploads/tercera-camiseta-adidas-boca-juniors-2021-22-1.jpg 
 *     LoginError:
 *       type: object
 *       properties:
 *         error:
 *           type: String
 *           description: Error message
 *           example: Invalid email or password, try again
 *         logged:
 *           type: Boolean
 *           description: True or false if user is logged or not
 *           example: false
 *     LogoutResponse:
 *       type: object
 *       properties:
 *         msg:
 *           type: String
 *           description: Message
 *           example: Session ended
 *         logged:
 *           type: Boolean
 *           description: True or false if user is logged or not
 *           example: false
 *     LogoutError:
 *       type: object
 *       properties:
 *         error:
 *           type: String
 *           description: Error message
 *           example: The is no session started or is already logout
 *     SignupBody:
 *       type: object
 *       properties:
 *         email:
 *           type: String
 *           description: User's email (must be a valid email)
 *           example: bokitforever@gmail.com
 *           required: true
 *         password:
 *           type: String
 *           description: User's password (min. 8 characters)
 *           example: bokitaforever
 *           required: true
 *         name:
 *           type: String
 *           description: User's name (min. 3 characters)
 *           example: Pepito
 *           required: true
 *         lastname:
 *           type: String
 *           description: User's lastname (min. 3 characters)
 *           example: Bombonera
 *           required: true
 *         age:
 *           type: Number
 *           description: User's age (min. 16 years old)
 *           example: 27
 *           required: true
 *         cardId:
 *           type: Number
 *           description: User's cardId (DNI) (must be 8 digits only)
 *           example: 20985125
 *           required: true
 *         address:
 *           type: String
 *           description: User's address (min. 10 characters)
 *           example: Av. Rivadavia 2354
 *           required: true
 *     SignupError:
 *       type: object
 *       properties: 
 *         error:
 *           type: String
 *           description: Error message
 *           example: This email already exist, try with other option
 *     ValidationErrors: 
 *       type: object
 *       properties:
 *         errors: 
 *           type: array
 *           items:
 *             type: string   
 *             example: required field(except patch), invalid field etc...
 */

const router = Router();


/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login user
 *     tags:
 *     - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginBody'
 *     responses:
 *       200:
 *         description: Ok, Returns 'userData' (if the user is an admin returns a isAdmin field) and 'logged' key with true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userData:
 *                   $ref: '#/components/schemas/LoginResponse'
 *                 logged: 
 *                   type: Boolean
 *                   example: true
 *       401:
 *         description: Unathorized, if user fails to login or is not registered
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginError'
 *       400:
 *         description: Bad Request, if fails validation
 *         content:
 *           application/json:
 *             schema: 
 *               $ref: '#/components/schemas/ValidationErrors'
 *
 */

router.post('/login', validate(login), authController.login);

/**
 * @swagger
 * /api/auth/edituser:
 *   patch:
 *     summary: Update user fields
 *     tags:
 *     - Auth
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/EditUser'
 *     responses:
 *       200:
 *         description: Ok, Returns updated user fields and a message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userUpdated:
 *                   $ref: '#/components/schemas/LoginResponse'
 *                 msg: 
 *                   type: String
 *                   example: User Updated
 *       400:
 *         description: Bad Request, if fails validation
 *         content:
 *           application/json:
 *             schema: 
 *               $ref: '#/components/schemas/ValidationErrors'
 */
router.patch(
	'/edituser',
	isAuth,
	validate(editUser),
	authController.editUser
);

/**
 * @swagger
 * /api/auth/logout:
 *   get:
 *     summary: Logout session
 *     tags:
 *     - Auth
 *     responses:
 *       200:
 *         description: Ok, Returns a message and logged boolean with false
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LogoutResponse'     
 *       404:
 *         description: Not Found, if there is no session
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LogoutError'
 */

router.get('/logout', authController.logout);

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: Signup a new user
 *     tags:
 *     - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SignupBody'
 *     responses:
 *       200:
 *         description: Ok, Returns a message saying that user was created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg: 
 *                   type: String
 *                   example: User created
 *       409:
 *         description: Conflict, if there is an user with the same email or cardId
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SignupError'
 *       400:
 *         description: Bad Request, if fails validation
 *         content:
 *           application/json:
 *             schema: 
 *               $ref: '#/components/schemas/ValidationErrors'
 */

router.post('/signup', validate(signup), authController.signup);

/**
 * @swagger
 * /api/auth/islogged:
 *   get:
 *     summary: Check if the user is logged
 *     tags:
 *     - Auth
 *     responses:
 *       200:
 *         description: Ok, Returns logged boolean with true if the user is logged
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 logged: 
 *                   type: Boolean
 *                   example: true
 *       404:
 *         description: Not Found, Returns logged boolean with false if the user is not logged
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 logged: 
 *                   type: Boolean
 *                   example: false
 */

router.get('/islogged', authController.isLogged);

export default router;
