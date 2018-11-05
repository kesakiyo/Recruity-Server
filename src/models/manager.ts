import * as Sequelize from 'sequelize';

/**
 * @swagger
 * definition:
 *  Manager:
 *    type: object
 *    required:
 *      - email
 *      - password
 *    properties:
 *      email:
 *        type: string
 *      password:
 *        type: string
 */
export default (sequelize: Sequelize.Sequelize) => sequelize.define('manager', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: Sequelize.STRING,
  password: Sequelize.STRING,
});
