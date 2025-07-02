import z from "zod";

export const EarlyAccessSchema = z.object({
  email: z.string().refine(
    (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    (val) => ({ message: `The email '${val}' is invalid` }),
  ),
});
