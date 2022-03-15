import { Router } from 'express';
import { route } from 'express/lib/application';
import { getUsers, getUser } from '../Controllers/UserController.js';
import auth from '../Middleware/authMiddleware.js';


const router = Router();

route.use(auth);

router.get('/', getUsers);
router.get('/:id', getUser);

export default router;