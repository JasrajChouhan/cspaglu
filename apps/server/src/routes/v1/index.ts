import { Router } from "express";
import earlyAccessRoute from "./early-access.route";
import courseRoute from "./course.route";
import lessonsRoute from "./lesson.route";
import featureFlagRoute from "./feature-flag.route";

const router: Router = Router();

router.use("/early-access", earlyAccessRoute);
router.use("/courses", courseRoute);
router.use("/courses/:courseId/lessons", lessonsRoute);
router.use("/features/flag", featureFlagRoute);

export default router;
