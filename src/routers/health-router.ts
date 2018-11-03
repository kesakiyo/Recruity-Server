import * as express from 'express';

import controller from '../controllers/health-controller';

const router = express.Router();

router.get('/ping', controller.ping);

export default router;
