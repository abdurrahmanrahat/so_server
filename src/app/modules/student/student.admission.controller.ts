import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { StudentServices } from './student.admission.service';

const createStudent = catchAsync(async (req: Request, res: Response) => {
  const student = req.body;

  const result = await StudentServices.createStudentIntoDb(student);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student registration successfully',
    data: result,
  });
});

export const StudentControllers = {
  createStudent,
};
