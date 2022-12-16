import mongoose from 'mongoose';
import { mongodbUrl } from 'config';

const disconnect = async () => {
  return await mongoose.connection.close();
};

const connect = async () => {
  console.log(mongodbUrl)
  return await mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export { connect, disconnect };
