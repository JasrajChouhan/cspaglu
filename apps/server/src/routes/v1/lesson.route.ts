import { Router } from "express";
import { validateCourseId, validateReqBody } from "../../middlewares";
import {
  CreateLesson,
  GetAllLessonsForCourse,
  GetLessonById,
  UpdateLesson,
  DeleteLesson,
  ReorderLessons,
} from "../../controller";
import {
  CreateLessonSchema,
  ReorderLessonsSchema,
  UpdateLessonSchema,
} from "@cspaglu/common/types";

const router: Router = Router({ mergeParams: true });

router.use(validateCourseId);

router.post("/", validateReqBody(CreateLessonSchema), CreateLesson);
router.get("/", GetAllLessonsForCourse);
router.get("/:lessonId", GetLessonById);
router.put("/:lessonId", validateReqBody(UpdateLessonSchema), UpdateLesson);
router.delete("/:lessonId", DeleteLesson);
// TODO : Below controller have as issue
router.patch("/reorder", validateReqBody(ReorderLessonsSchema), ReorderLessons);

export default router;
