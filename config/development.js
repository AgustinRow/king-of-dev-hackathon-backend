require('dotenv').config();
module.exports = {
  port: process.env.PORT,
  mongodbUrl: process.env.MONGO_URL,
  host: process.env.HOST,
};
