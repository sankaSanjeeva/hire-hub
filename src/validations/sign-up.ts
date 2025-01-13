import { z } from 'zod';

export const signUpSchema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: 'First name must be at least 2 characters long.' })
      .trim(),
    lastName: z
      .string()
      .min(2, { message: 'Last name must be at least 2 characters long.' })
      .trim(),
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z
      .string()
      .min(6, { message: 'Be at least 6 characters long.' })
      .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
      .regex(/[0-9]/, { message: 'Contain at least one number.' })
      .regex(/[^a-zA-Z0-9]/, {
        message: 'Contain at least one special character.',
      })
      .trim(),
    confirmPassword: z.string().trim(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export type SignUpSchemaType = z.infer<typeof signUpSchema>;

export type SignUpSchemaErrorType = z.inferFlattenedErrors<
  typeof signUpSchema
>['fieldErrors'];

export type SignUpState =
  | {
      data?: SignUpSchemaType;
      errors?: SignUpSchemaErrorType;
      message?: string;
    }
  | undefined;
