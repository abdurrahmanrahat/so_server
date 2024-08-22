import express from 'express';
import ValidateRequest from '../../middlewares/ValidateRequest';
import { StudentControllers } from './student.admission.controller';
import { StudentValidations } from './student.admission.validation';

const router = express.Router();

router.post(
  '/registration',
  ValidateRequest(StudentValidations.createStudentValidationSchema),
  StudentControllers.createStudent,
);

export const StudentRoutes = router;
