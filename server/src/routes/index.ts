import { Router } from 'express';
import productRouter from './products';
import authRouter from './auth';

const router = Router();

router.use('/products', productRouter);
router.use('/auth', authRouter);

export default router;
