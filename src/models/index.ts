import * as Sequelize from 'sequelize';

import ManagerModel from './manager';

const sequelize = new Sequelize(
  'recruity',
  'root',
  'qweqweqwe',
  {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
);

const Manager = ManagerModel(sequelize);

sequelize.sync({ force: true }).then(() => {
  console.log(`Database & tables created!`);
});

export {
  Manager,
};
