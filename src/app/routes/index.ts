import express from 'express';
import { StudentRoutes } from '../modules/student/student.admission.route';

const router = express.Router();

// router.use('/users', UserRoutes);

const moduleRoutes = [
  {
    path: '/students',
    route: StudentRoutes,
  },
];

moduleRoutes.forEach((item) => router.use(item.path, item.route));

export default router;
