
module.exports = (sequelize, DataTypes) => {

  sequelize.define('wallet', {
    wallet: {
      type: DataTypes.STRING,
      allowNull: false,
    }    
  })
};