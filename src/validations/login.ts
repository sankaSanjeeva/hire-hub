import { User } from '@prisma/client';
import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
  password: z.string().min(6, { message: 'Be at least 6 characters long' }),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;

export type LoginSchemaErrorType = z.inferFlattenedErrors<
  typeof loginSchema
>['fieldErrors'];

export type LoginState =
  | {
      user?: User;
      data?: LoginSchemaType;
      errors?: LoginSchemaErrorType;
      message?: string;
    }
  | undefined;
