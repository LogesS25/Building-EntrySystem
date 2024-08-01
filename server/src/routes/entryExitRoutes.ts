import { Router } from 'express';
import { createEntry, createExit } from '../controllers/entryExitController';

const router = Router();


router.post('/entry', createEntry);


router.post('/exit', createExit);

export default router;
