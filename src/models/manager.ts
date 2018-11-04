import * as Sequelize from 'sequelize';

export default (sequelize: Sequelize.Sequelize) => sequelize.define('manager', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
});
