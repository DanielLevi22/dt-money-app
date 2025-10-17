import z from "zod";

export const schema = z.object({
  email: z.string().email("email invalido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});
