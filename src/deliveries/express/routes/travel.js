import { Router } from 'express';
import handlerController from '../middlewares/handlerController';
import {
  beginTravelControllerInstance,
  endTravelControllerInstance,
  getTravelsControllerInstance,
} from '../../../controllers/travel/index';

const router = Router();

router.get('/', handlerController(getTravelsControllerInstance));

router.post('/beginTravel', handlerController(beginTravelControllerInstance));

router.post('/endTravel', handlerController(endTravelControllerInstance));

export { router };
