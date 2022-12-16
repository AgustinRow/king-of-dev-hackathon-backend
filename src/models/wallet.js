const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('wallet', {
    wallet: {
      type: DataTypes.STRING,
      allowNull: false,
    }    
  })
};