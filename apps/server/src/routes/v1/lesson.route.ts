import { Router } from "express";

const router: Router = Router({ mergeParams: true });

/*

* Todo: Lesson api end point

* router.post("/", validateReqBody(CreateLessonSchema), CreateLesson);
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
