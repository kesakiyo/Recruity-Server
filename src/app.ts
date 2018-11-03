import * as express from 'express';
import * as swaggerUiExpress from 'swagger-ui-express';
import swaggerJSDoc = require('swagger-jsdoc');

import conf from './conf';

// Create Express server;
const app = express();

app.use(
  '/api-docs',
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(swaggerJSDoc(conf.swagger)),
);

/**
 * @swagger
 * /:
 *  get:
 *    summary: Test api
 *    description: Test api desc
 *    responses:
 *      200:
 *        good
 */
app.get('/', (req, res, next) => {
  res.send('hello world!!!!');
});

export default app;
