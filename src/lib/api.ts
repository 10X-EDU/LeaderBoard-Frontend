import axios from "axios";

const BASE_URL = process.env.BASE_URL || "http://localhost:8000/api/v1";

type signInWithEmailAndPasswordType = {
  email: string;
  password: string;
};
export async function signInWithEmailAndPassword({
  email,
  password,
}: signInWithEmailAndPasswordType) {
  return await axios.post(`${BASE_URL}/auth/sign-in`, {
    email: email,
    password: password,
  });
}

type SignInUserType = {
  firstName: string;
  lastName: string;
  email: string;
  specialization: "DEVELOPMENT" | "DESIGNER";
  password: string;
  passwordConfirm: string;
};

export async function signUpUser({
  firstName,
  lastName,
  email,
  specialization = "DEVELOPMENT",
  password,
  passwordConfirm,
}: SignInUserType) {
  return await axios.post(`${BASE_URL}/auth/sign-up`, {
    firstName,
    lastName,
    email,
    specialization,
    password: password,
    passwordConfirm: passwordConfirm,
  });
}
