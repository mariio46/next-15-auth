import { z } from 'zod';

const deleteAccountSchema = z.object({
    password: z.string().min(1),
});

type DeleteAccountFormFields = z.infer<typeof deleteAccountSchema>;

export { deleteAccountSchema, type DeleteAccountFormFields };
