import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class Wallet extends Model {

    Wallet.init('wallet')

  }



  sequelize.define('wallet', {
    wallet: {
      type: DataTypes.STRING,
      allowNull: false,
    }    
  })
};