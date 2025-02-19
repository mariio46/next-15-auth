import { z } from 'zod';

const updatePasswordSchema = z
    .object({
        current_password: z.string().min(1),
        new_password: z.string().min(8),
        new_password_confirmation: z.string().min(8),
    })
    .refine((fields) => fields.new_password === fields.new_password_confirmation, {
        message: 'Password field confirmation does not match.',
        path: ['new_password'],
    })
    .refine((fields) => fields.new_password !== fields.current_password, {
        message: 'New password cannot be same with Current password',
        path: ['new_password'],
    });

type UpdatePasswordFormFields = z.infer<typeof updatePasswordSchema>;

export { updatePasswordSchema, type UpdatePasswordFormFields };
