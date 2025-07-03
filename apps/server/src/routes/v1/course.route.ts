import { Router } from "express";
import { validateReqBody } from "../../middlewares";
import { CreateCourseSchema } from "@cspaglu/common/types";

import { CreateCourse, GetAllCourses } from "../../controller";

const router: Router = Router();

router.post("/", validateReqBody(CreateCourseSchema), CreateCourse);
router.get("/", GetAllCourses);

export default router;
