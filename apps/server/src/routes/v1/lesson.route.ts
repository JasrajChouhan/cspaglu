import { Router } from "express";
import { validateCourseId, validateReqBody } from "../../middlewares";
import {
  CreateLesson,
  GetAllLessonsForCourse,
  GetLessonById,
} from "../../controller";
import { CreateLessonSchema, UpdateLessonSchema } from "@cspaglu/common/types";

const router: Router = Router({ mergeParams: true });

router.use(validateCourseId);

router.post("/", validateReqBody(CreateLessonSchema), CreateLesson);
router.get("/", GetAllLessonsForCourse);
router.get("/:lessonId", GetLessonById);
// router.put(
//   "/:lessonId",
//   validateReqBody(UpdateLessonSchema),
//   UpdateLesson
// );

/*
* Todo: Lesson api end point

* router.put(
  "/:lessonId",
  validateReqBody(UpdateLessonSchema),
  UpdateLesson
);
* router.delete("/:lessonId", DeleteLesson);
* router.patch(
  "/reorder",
  validateReqBody(ReorderLessonsSchema),
  ReorderLessons
);
* 
*/

export default router;
