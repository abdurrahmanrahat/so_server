import { TStudent } from './student.admission.interface';
import { StudentModel } from './student.admission.model';

// post
const createStudentIntoDb = async (student: TStudent) => {
  const result = await StudentModel.create(student);
  return result;
};

export const StudentServices = {
  createStudentIntoDb,
};
