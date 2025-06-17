export type RegistrationFirstStepDataType = {
  firstName: string;
  lastName: string;
  email: string;
  // identificator: number;
};

export type RegistrationSecondStepDataType = {
  password: string;
  passwordConfirm: string;
};

export type SigninType = {
  email: string;
  password: string;
};

export type userStoreType = {
  token: string | null;
  setToken: (token: string | null) => void;
};

export type RegistrationDataType = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};
