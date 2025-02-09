import { z } from 'zod';

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
});

type LoginFormFields = z.infer<typeof loginSchema>;

export { loginSchema, type LoginFormFields };
