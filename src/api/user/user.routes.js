import { Router } from 'express';
import controller from './user.controller';

const router = Router();

router.get('/info', controller.getUserInfo);

export default router;
