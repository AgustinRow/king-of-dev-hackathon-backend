import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import Sequelize from 'sequelize';
const basename = path.basename(__filename);
dotenv.config();

const models = {};

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
});

const modelFile = (file) => {
  const modelPath = __dirname + '/' + file;
  const isDirectory = fs.statSync(modelPath).isDirectory();
  if (isDirectory) {
    return fs.readdirSync(modelPath).filter((file) => {
      return (
        file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
      );
    });
  }
};

fs.readdirSync(__dirname)
  .filter((file) => {
    if (file !== basename) {
      return modelFile(file);
    }
  })
  .forEach((file) => {
    const model = require(path.join(__dirname + '/' + file, file))(
      sequelize,
      Sequelize.DataTypes,
    );
    models[model.name] = model;
  });

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});
//sequelize.sync({ alter: true });
models.sequelize = sequelize;
//db.Sequelize = Sequelize;


export default models;
