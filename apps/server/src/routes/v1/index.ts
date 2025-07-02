import { Router } from "express";
import earlyAccessRoute from "./early-access.route";

const router: Router = Router();

router.use("/early-access", earlyAccessRoute);

export default router;
