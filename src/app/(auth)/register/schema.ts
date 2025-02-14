import { z } from 'zod';

const registerSchema = z
    .object({
        name: z
            .string({ errorMap: () => ({ message: 'The Name field is required.' }) })
            .min(3, { message: 'The Name field must be at least 3 characters.' })
            .max(255, { message: 'The name field must not be greater than 255 characters.' }),
        email: z
            .string({ errorMap: () => ({ message: 'The Email field is required.' }) })
            .min(1, { message: 'The Email field is required.' })
            .email({ message: 'The Email field is invalid Email address.' }),
        password: z
            .string({ errorMap: () => ({ message: 'The Password field is required.' }) })
            .min(8, { message: 'The Password must be at least 8 characters.' }),
        password_confirmation: z
            .string({ errorMap: () => ({ message: 'The Confirm Password field is required.' }) })
            .min(8, { message: 'The Confirm Password must be at least 8 characters.' }),
    })
    .refine((data) => data.password === data.password_confirmation, {
        message: 'The Password field confirmation does not match.',
        path: ['password'],
    });

type RegisterFormFields = z.infer<typeof registerSchema>;

export { registerSchema, type RegisterFormFields };
