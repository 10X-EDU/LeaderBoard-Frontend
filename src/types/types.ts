export type RegistrationFirstStepDataType = {
  firstName: string;
  lastName: string;
  email: string;
};

export type RegistrationSecondStepDataType = {
  password: string;
  passwordConfirm: string;
  specialization: 'DEVELOPMENT' | 'DESIGNER';
};

export type SigninType = {
  email: string;
  password: string;
};

export type userStoreType = {
  token: string | null;
  setToken: (token: string | null) => void;
};

export type RegistrationDataType = RegistrationFirstStepDataType & RegistrationSecondStepDataType
