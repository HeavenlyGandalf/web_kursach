const DataTypes =   require('sequelize');
const sequelize =  require('./database').database;

const applicationModel = sequelize.define(
  'applicationModel',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'ID_applications',
      validate: {
        min: 1,
        max: 999,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'name',
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'phone',
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'email',
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  },
);

(async () => {
  await applicationModel.sync();
})()

module.exports.applicationModel = applicationModel;

