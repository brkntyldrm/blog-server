import { Router } from 'express';
import { getUsers, getUser } from '../Controllers/UserController.js';
import auth from '../Middleware/authMiddleware.js';


const router = Router();

router.use(auth);

router.get('/', getUsers);
router.get('/:id', getUser);

export default router;