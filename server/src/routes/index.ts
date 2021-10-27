import { Router } from 'express';
import productRouter from './products';
import authRouter from './auth';
import cartRouter from './cart'

const router = Router();

router.use('/products', productRouter);
router.use('/auth', authRouter);
router.use('/cart', cartRouter)

export default router;
