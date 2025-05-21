import { z } from "zod";

export const createTaskSchema = z.object({
  name: z
    .string({ required_error: "Campo obrigatório" })
    .min(1, { message: "Campo obrigatório" }),
  description: z
    .string({ required_error: "Campo obrigatório" })
    .min(1, { message: "Campo obrigatório" }),
});

export type CreateTaskDto = z.infer<typeof createTaskSchema>;
