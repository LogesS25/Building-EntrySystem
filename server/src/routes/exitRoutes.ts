import { Router } from 'express';
import { registerExit } from '../controllers/exitController';

const router = Router();
router.post('/exit', registerExit);


export default router;
