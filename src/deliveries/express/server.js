import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import { port } from 'config';

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

export const start = () => {
  app.listen(port, () => {
    console.log(`REST API on http://localhost:${port}`);
  });
};
