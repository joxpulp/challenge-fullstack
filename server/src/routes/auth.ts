import { Router } from 'express';
import { uploadAvatar } from '../config/cloudinary';
import { authController } from '../controllers/auth';
import { isAuth } from '../middlewares/auth';

const router = Router();

router.post('/login', authController.login);
router.put(
	'/edituser',
	isAuth,
	uploadAvatar.single('avatar'),
	authController.editUser
);
router.get('/logout', isAuth, authController.logout);
router.post('/signup', authController.signup);
router.get('/islogged', authController.isLogged);

export default router;
