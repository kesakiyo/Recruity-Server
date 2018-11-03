import { RequestHandler } from 'express';

/**
 * @swagger
 * /health/ping:
 *  get:
 *    summary: 서버가 살아있는지 확인
 *    tags:
 *      - health
 *    description: 서버가 살아있다면 'pong'이 온다
 *    responses:
 *      '200':
 *        description: OK
 *        content:
 *          text/html:
 *            schema:
 *              type: string
 */
const ping: RequestHandler = function(req, res, next) {
  res.send('pong');
};

export default {
  ping,
};
