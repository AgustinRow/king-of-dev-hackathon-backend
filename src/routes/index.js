import { Router } from 'express';
import { router as walletRouter } from './wallet.js'

const router = Router();

router.use('/wallet', walletRouter)

export { router };
