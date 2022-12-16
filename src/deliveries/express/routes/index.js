import { Router } from 'express';

import { router as healthcheckRoutes } from './healthckeck.js';
import { router as travelRoutes } from './travel.js';
import { router as walletRoutes } from './wallet.js';

const router = Router();

router.use('/healthcheck', healthcheckRoutes);
router.use('/travel', travelRoutes);
router.use('/wallet', walletRoutes);

export { router };
