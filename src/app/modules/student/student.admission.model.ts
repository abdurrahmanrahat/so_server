import { Schema, model } from 'mongoose';
import { TStudent } from './student.admission.interface';

const studentSchema = new Schema<TStudent>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female', 'others'] },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  guardian: {
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    guardianContactNumber: { type: String, required: true },
    yearlyIncome: { type: String, required: true },
  },
  presentAddress: {
    division: { type: String, required: true },
    district: { type: String, required: true },
    address: { type: String, required: true },
  },
  permanentAddress: {
    division: { type: String, required: true },
    district: { type: String, required: true },
    address: { type: String, required: true },
  },
  religion: { type: String, required: true },
  nationality: { type: String, required: true },
  identity: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  maritalStatus: { type: String, enum: ['single', 'married'] },
});

// model
export const StudentModel = model<TStudent>('Student', studentSchema);
