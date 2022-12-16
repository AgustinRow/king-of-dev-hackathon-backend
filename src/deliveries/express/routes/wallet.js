import { Router } from 'express';
import { signInUserControllerInstance } from '../../../controllers/auth/index';
import handlerController from '../middlewares/handlerController';
import Validator from '../middlewares/Validator';

const router = Router();

router.post(
  '/',
  Validator('walletAddressSchema'),
  handlerController(signInUserControllerInstance),
);

export default router;
