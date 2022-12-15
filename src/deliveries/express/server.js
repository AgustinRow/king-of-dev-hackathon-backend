import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import { port } from 'config';
import models from '../../models/db';
const sequelize = models.sequelize;
const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

export const start = async () => {
  await sequelize
    .authenticate()
    .then(() => {
      console.log('CONEXIÓN A LA BASE DE DATOS OK');
    })
    .catch((error) => {
      console.log('error: ', error);
    });
  app.listen(port, () => {
    console.log(`REST API on http://localhost:${port}`);
  });
};
