import { Router } from "express";
import earlyAccessRoute from "./early-access.route";
import courseRoute from "./course.route";
import lessonsRoute from "./lesson.route";

const router: Router = Router();

router.use("/early-access", earlyAccessRoute);
router.use("/courses", courseRoute);
router.use("/courses/:courseId/lessons", lessonsRoute);

export default router;
