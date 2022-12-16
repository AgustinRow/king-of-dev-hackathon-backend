import { Router } from 'express';
import { getTravelControllerInstance } from '../../../controllers/travel';
import handlerController from '../middlewares/handlerController';
//import Validator from '../middlewares/Validator';

const router = Router();

router.get('/', handlerController(getTravelControllerInstance));

export default router;
