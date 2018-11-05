import { RequestHandler } from 'express';

/**
 * @swagger
 * /managers:
 *  post:
 *    summary: 새로운 매니저를 추가
 *    tags:
 *      - managers
 *    parameters:
 *      - name: body
 *        in: body
 *        schema:
 *          $ref: '#/definitions/Manager'
 *    description: 입력받은 정보로 새로운 매니저를 추가한다.
 *    responses:
 *      '200':
 *        description: OK
 *        content:
 *          applecation/json:
 *            schema:
 *              $ref: '#/definitions/Manager'
 */
const createManager: RequestHandler = function(req, res, next) {
  const { email, password } = req.body;
  res.json({ email, password });
};

export default {
  createManager,
};
