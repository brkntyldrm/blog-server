import { Router } from 'express';
import { me, edit, changePassword } from '../Controllers/ProfileController.js';
import auth from '../Middleware/authMiddleware.js';


const router = Router();

router.use(auth);

router.get('/me', me);
router.put('/edit', edit);
router.put('/changePassword', changePassword);

export default router;