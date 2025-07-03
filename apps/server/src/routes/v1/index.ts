import { Router } from 'express';
import earlyAccessRoute from './early-access.route';
import courseRoute from './course.route';

const router: Router = Router();

router.use('/early-access', earlyAccessRoute);
router.use('/courses', courseRoute);

export default router;
