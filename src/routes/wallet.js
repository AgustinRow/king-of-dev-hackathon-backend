import { Router } from 'express';
import { postWallet } from '../controllers/auth/wallet_controllers.js'
const router = Router()

router.post("/", postWallet);

export { router };