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
      yearlyIncome: z.string(),
    }),
    presentAddress: z.object({
      division: z.string(),
      district: z.string(),
      address: z.string(),
    }),
    permanentAddress: z.object({
      division: z.string(),
      district: z.string(),
      address: z.string(),
    }),
    religion: z.string(),
    nationality: z.string(),
    identity: z.string(),
    bloodGroup: z.string(),
    maritalStatus: z.enum(['single', 'married']),
  }),
});

export const StudentValidations = {
  createStudentValidationSchema,
};
