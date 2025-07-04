import { Router } from "express";
import { validateReqBody } from "../../middlewares";
import { CreateCourseSchema, UpdateCourseSchema } from "@cspaglu/common/types";

import { CreateCourse, GetAllCourses, UpdateCourse } from "../../controller";

const router: Router = Router();

router.post("/", validateReqBody(CreateCourseSchema), CreateCourse);
router.get("/", GetAllCourses);
router.put("/", validateReqBody(UpdateCourseSchema), UpdateCourse);

export default router;
