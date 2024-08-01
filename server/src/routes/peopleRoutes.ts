import { Router } from 'express';
import { getPeopleInside } from '../controllers/peopleController';

const router = Router();
router.get('/people', getPeopleInside);

export default router;
