import { connect, disconnect } from '../models/db';

export const services = () => {
  return { db: { connect, disconnect } };
};
