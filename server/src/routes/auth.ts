import { Router } from "express";
import { authController } from "../controllers/auth";
import { isAuth } from "../middleware/auth";


const router = Router();

router.post('/login', authController.login)
router.put('/edituser', isAuth, authController.editUser)
router.get('/logout', isAuth, authController.logout)
router.post('/signup', authController.signup)
router.get('/islogged', authController.isLogged)

export default router;