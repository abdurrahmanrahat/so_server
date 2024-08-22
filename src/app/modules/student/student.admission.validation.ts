import { z } from 'zod';

const createStudentValidationSchema = z.object({
  body: z.object({
    firstName: z.string(),
    lastName: z.string(),
    dateOfBirth: z.string(),
    gender: z.enum(['male', 'female', 'others']),
    email: z.string().email(),
    contactNumber: z.string(),
    address: z.string(),
    guardian: z.object({
      fatherName: z.string(),
      motherName: z.string(),
      guardianContactNumber: z.string(),
    }),
  }),
});

export const StudentValidations = {
  createStudentValidationSchema,
};
