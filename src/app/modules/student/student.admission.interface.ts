export type TStudent = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'others';
  email: string;
  contactNumber: string;
  address: string;
  guardian: {
    fatherName: string;
    motherName: string;
    guardianContactNumber: string;
  };
};
