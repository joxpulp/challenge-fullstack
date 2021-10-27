import { Router } from "express";
import { authController } from "../controllers/auth";


const router = Router();

router.use('/login', authController.login)
router.use('/logout', authController.logout)
router.use('/signup', authController.signup)
router.use('/islogged', authController.isLogged)

export default router;