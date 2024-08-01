import { Router } from 'express';
import { registerEntry } from '../controllers/entryController';

const router = Router();

router.post('/entry', registerEntry);


export default router;
