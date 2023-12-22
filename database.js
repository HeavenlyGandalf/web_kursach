const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'Application_DB',
  'postgres',
  'postgres',
  {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
      max: 10, //максимальное кол-во соединений в пуле (Default: 5)
      min: 0, //минимальное кол-во соединений в пуле (Default: 0)
      acquire: 30000, //время в миллисекундах, в течение которого будет осуществляться попытка установить соединение, прежде чем будет сгенерировано исключение (Default: 60000)
      idle: 10000, //время простоя в миллисекундах, по истечении которого соединение покинет пул (Default: 1000)
    },
  }
);

sequelize
  .authenticate()
  .then(() => console.log('Connected.'))
  .catch((err) =>
    console.error('Connection error: ', err)
  );

module.exports.database = sequelize;
