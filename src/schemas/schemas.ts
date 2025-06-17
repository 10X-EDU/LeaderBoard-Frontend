import { z } from "zod";

export const SignInSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid Email." })
    .min(5, { message: "Email must be at least 5 characters." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

export const RegistrationStepOneSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "name must be at least 3 characters." }),
  lastName: z
    .string()
    .min(3, { message: "lastname must be at least 3 characters." }),
  email: z
    .string()
    .email({ message: "incorect email" })
    .min(1, { message: "email is required." }),
});

export const RegistrationStepTwoSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "password must be at least 8 characters." }),
    passwordConfirm: z
      .string()
      .min(8, { message: "password must be at least 8 characters." }),
  })
  .refine(
    ({ password, passwordConfirm }) => password === passwordConfirm,
    "passwords must match",
  );

export const RegistrationSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid Email." })
    .min(5, { message: "Email must be at least 5 characters." }),

  firstName: z
    .string()
    .min(3, { message: "name must be at least 3 characters." }),
  lastName: z
    .string()
    .min(3, { message: "lastname must be at least 3 characters." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});
