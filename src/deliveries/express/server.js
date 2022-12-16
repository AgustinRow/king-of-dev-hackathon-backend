import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import walletRouter from './routes/wallet';
import healthCheckRouter from './routes/healthckeck';
import travelController from './routes/travel';
import { logger } from '../../logger/generalJsonLogger';

const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/wallet', walletRouter);
app.use('/api/healthcheck', healthCheckRouter);
app.use('/api/travel', travelController);

const build = () => app;

async function startServices({ db }) {
  try {
    await db.connect();
    if (mongoose.STATES[mongoose.connection.readyState] == 'connected') {
      logger.info('Database connected');
    }
  } catch (error) {
    logger.error('Could not connect to database', {
      errors: JSON.stringify(error),
    });
  }
}

export { build, startServices };
