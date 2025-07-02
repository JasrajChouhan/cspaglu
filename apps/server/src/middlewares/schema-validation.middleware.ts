import type { NextFunction, Request, Response } from "express";
import { ZodSchema } from "@cspaglu/common";

export const validateReqBody =
  (schema: ZodSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      const errorMessage = result.error.errors
        .map((err) => err.message)
        .join(", ");
      res.status(400).json({
        success: false,
        errorMessage,
      });
      return;
    }

    req.body = result.data;
    next();
  };
