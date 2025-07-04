import { Router } from "express";
import { validateReqBody } from "../../middlewares";
import { CreateCourseSchema, UpdateCourseSchema } from "@cspaglu/common/types";

import {
  CreateCourse,
  GetAllCourses,
  GetCourseByIdOrSlug,
  UpdateCourse,
  DeleteCourse,
} from "../../controller";

const router: Router = Router();

router.post("/", validateReqBody(CreateCourseSchema), CreateCourse);
router.get("/", GetAllCourses);
router.get("/:idOrSlug", GetCourseByIdOrSlug);
router.put("/", validateReqBody(UpdateCourseSchema), UpdateCourse);
router.delete("/:idOrSlug", DeleteCourse);

/*
router.patch("/:idOrSlug/publish", PublishCourse);
router.get("/:idOrSlug/lessons", GetCourseLessons);
*/

export default router;
