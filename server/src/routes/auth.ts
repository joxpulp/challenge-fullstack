import { Router } from 'express';
import { isAuth } from '../middlewares/auth';
import { editUser, login, signup } from '../helpers/yup';
import { validate } from '../middlewares/validate';
import { authController } from '../controllers/auth';

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
 *         _id:  6182191a7d9034b287c54c12
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
 *         loggedIn:
 *           type: Boolean
 *           description: True or false if user is logged in or not
 *           example: false
 *     EditUser:
 *       type: object
 *       properties: 
 *         avatar:
 *           type: file
 *           format: binary
 *           description: User's avatar img (Only .png jpeg jpg)
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
 *     LogoutResponse:
 *       type: object
 *       properties:
 *         msg:
 *           type: String
 *           description: Message
 *           example: Session ended
 *         loggedIn:
 *           type: Boolean
 *           description: True or false if user is logged or not
 *           example: false
 *     LogoutError:
 *       type: object
 *       properties:
 *         error:
 *           type: String
 *           description: Error message
 *           example: There is no session started or is already logout
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
 *           example: This email or cardId already exist, try with other option
 *     ValidationErrors: 
 *       type: object
 *       properties:
 *         errors: 
 *           type: array
 *           items:
 *             type: string   
 *             example: required field(except patch), invalid field etc...
 *     AuthError:
 *       type: object
 *       properties:
 *         error:
 *           type: String
 *           description: Error message
 *           example: You are not logged in
 *         loggedIn:
 *           type: Boolean
 *           description: False because the user is not logged in
 *           example: false
 *     AdminError:
 *       type: object
 *       properties:
 *         error:
 *           type: String
 *           description: Error message
 *           example: Not authorized, login with admin privilegies  
 */

const router = Router();


/**
 * @swagger
 * /auth/login:
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
 *         description: OK, Returns 'userData' (if the user is an admin returns a isAdmin field) and 'loggedIn' key with true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userData:
 *                   $ref: '#/components/schemas/LoginResponse'
 *                 loggedIn: 
 *                   type: Boolean
 *                   example: true
 *       401:
 *         description: Unauthorized, if user fails to login or is not registered
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginError'
 *       400:
 *         description: Bad Request, if field validation fails
 *         content:
 *           application/json:
 *             schema: 
 *               $ref: '#/components/schemas/ValidationErrors'
 *
 */

router.post('/login', validate(login), authController.login);

/**
 * @swagger
 * /auth/edituser:
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
 *       201:
 *         description: Created, Returns updated user fields and a message
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
 *         description: Bad Request, if field validation fails
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
 * /auth/logout:
 *   get:
 *     summary: Logout session
 *     tags:
 *     - Auth
 *     responses:
 *       200:
 *         description: OK, Returns a message and logged boolean with false
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LogoutResponse'     
 *       404:
 *         description: Not Found, if a session does not exist 
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LogoutError'
 */

router.get('/logout', authController.logout);

/**
 * @swagger
 * /auth/signup:
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
 *         description: OK, Returns a message saying that user was created
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
 *         description: Bad Request, if field validation fails
 *         content:
 *           application/json:
 *             schema: 
 *               $ref: '#/components/schemas/ValidationErrors'
 */

router.post('/signup', validate(signup), authController.signup);

/**
 * @swagger
 * /auth/isloggedin:
 *   get:
 *     summary: Check if the user is logged in or not
 *     tags:
 *     - Auth
 *     responses:
 *       200:
 *         description: OK, Returns logged boolean with true because the user is logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 loggedIn: 
 *                   type: Boolean
 *                   example: true
 *       404:
 *         description: Not Found, Returns logged boolean with false because the user is not logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 loggedIn: 
 *                   type: Boolean
 *                   example: false
 */

router.get('/isloggedin', authController.isLoggedIn);

export default router;
