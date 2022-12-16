import { Router } from 'express';
import handlerController from '../middlewares/handlerController';
// import Validator from '../middlewares/Validator';
import { beginTravelControllerInstance, endTravelControllerInstance } from '../../../controllers/travel/index';

const router = Router();

router.post(
  '/beginTravel',
  handlerController(beginTravelControllerInstance),
);

router.post(
    '/endTravel',
    handlerController(endTravelControllerInstance),
  );

  export { router };
