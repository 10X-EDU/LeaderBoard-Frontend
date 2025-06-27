import { z } from "zod";

export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter your email address." })
    .email({ message: "Please enter a valid email address (e.g. user@example.com)." })
    .min(5, { message: "Email must be at least 5 characters." }),
  password: z
    .string()
    .min(1, { message: "Please enter your password." })
    .min(8, { message: "Password must be at least 8 characters." }),
});

export const RegistrationStepOneSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "Please enter your first name." })
    .min(3, { message: "First name must be at least 3 characters." }),
  lastName: z
    .string()
    .min(1, { message: "Please enter your last name." })
    .min(3, { message: "Last name must be at least 3 characters." }),
  email: z
    .string()
    .min(1, { message: "Please enter your email address." })
    .email({ message: "Please enter a valid email address (e.g. user@example.com)." }),
});

export const RegistrationStepTwoSchema = z
  .object({
    specialization: z.enum(["DEVELOPMENT", "DESIGNER"]),
    password: z
      .string()
      .min(1, { message: "Please enter a password." })
      .min(8, { message: "Password must be at least 8 characters." }),
    passwordConfirm: z
      .string()
      .min(1, { message: "Please confirm your password." })
      .min(8, { message: "Password must be at least 8 characters." }),
  })
  .refine(
    ({ password, passwordConfirm }) => password === passwordConfirm,
    {
      message: "Passwords do not match.",
      path: ["passwordConfirm"],
    }
  );

export const RegistrationSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Please enter your email address." })
    .email({ message: "Please enter a valid email address (e.g. user@example.com)." })
    .min(5, { message: "Email must be at least 5 characters." }),

  firstName: z
    .string()
    .min(1, { message: "Please enter your first name." })
    .min(3, { message: "First name must be at least 3 characters." }),
  lastName: z
    .string()
    .min(1, { message: "Please enter your last name." })
    .min(3, { message: "Last name must be at least 3 characters." }),
  password: z
    .string()
    .min(1, { message: "Please enter a password." })
    .min(8, { message: "Password must be at least 8 characters." }),
});
