import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as swaggerUiExpress from 'swagger-ui-express';
import swaggerJSDoc = require('swagger-jsdoc');

import conf from './conf';
import healthRouter from './routers/health-router';
import managersRouter from './routers/managers-router';

import './models';

// Create Express server;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

/**
 * @swagger
 * tags:
 *  name: managers
 *  description: Manager 관련 API
 */
app.use('/managers', managersRouter);

export default app;
