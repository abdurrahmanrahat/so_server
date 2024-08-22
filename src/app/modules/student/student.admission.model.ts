import { Schema, model } from 'mongoose';
import { TStudent } from './student.admission.interface';

const studentSchema = new Schema<TStudent>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female', 'others'] },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  address: { type: String, required: true },
  guardian: {
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    guardianContactNumber: { type: String, required: true },
  },
});

// model
export const StudentModel = model<TStudent>('Student', studentSchema);
