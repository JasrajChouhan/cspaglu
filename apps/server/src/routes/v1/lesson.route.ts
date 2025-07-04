import { Router } from "express";
import { validateReqBody } from "../../middlewares";
import { CreateLesson } from "../../controller";
import { CreateLessonSchema } from "@cspaglu/common/types";

const router: Router = Router({ mergeParams: true });

router.post("/", validateReqBody(CreateLessonSchema), CreateLesson);

/*
* Todo: Lesson api end point

* router.get("/", GetAllLessonsForCourse);
* router.get("/:lessonId", GetLessonById);
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
