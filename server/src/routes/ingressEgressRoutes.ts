import { Router } from 'express';
import { registerEntry, registerExit } from '../controllers/ingressEgressController';

const router = Router();


router.post('/entry', registerEntry);


router.post('/exit', registerExit);

export default router;
