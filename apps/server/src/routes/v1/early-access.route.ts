import { Router } from "express";
import { validateReqBody } from "../../middlewares";
import { EarlyAccessSchema } from "@cspaglu/common/types";

import { JoinWaitList } from "../../controller";

const router: Router = Router();

router.post("/join-waitlist", validateReqBody(EarlyAccessSchema), JoinWaitList);

export default router;
