import { z } from 'zod';

const updateAccountSchema = z.object({
    name: z.string().min(1).min(3),
    email: z.string().email(),
});

type UpdateAccountFormFields = z.infer<typeof updateAccountSchema>;

export { updateAccountSchema, type UpdateAccountFormFields };
