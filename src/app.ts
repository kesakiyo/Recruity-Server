import * as express from 'express';
import * as swaggerUiExpress from 'swagger-ui-express';
import swaggerJSDoc = require('swagger-jsdoc');

import conf from './conf';
import healthRouter from './routers/health-router';

import './models';

// Create Express server;
const app = express();

app.use(
  '/api-docs',
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(swaggerJSDoc(conf.swagger)),
);

/**
 * @swagger
 * tags:
 *  name: health
 *  description: RestAPI 테스트
 */
app.use('/health', healthRouter);

export default app;
