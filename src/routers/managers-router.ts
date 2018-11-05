import * as express from 'express';

import controller from '../controllers/managers-controller';

const router = express.Router();

router.post('/', controller.createManager);

export default router;
