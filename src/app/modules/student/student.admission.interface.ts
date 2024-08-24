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
    yearlyIncome: string;
  };
  presentAddress: {
    division: string;
    district: string;
    address: string;
  };
  permanentAddress: {
    division: string;
    district: string;
    address: string;
  };
  religion: string;
  nationality: string;
  identity: string;
  bloodGroup: string;
  maritalStatus: 'single' | 'married';
};
