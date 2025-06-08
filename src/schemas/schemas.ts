import { z } from "zod";

const SignInSchema = z.object({
    email: z.string().email({message: "Invalid Email."}).min(5,{message: "Email must be at least 5 characters."}),
    password: z.string().min(8,{message:"Password must be at least 8 characters."})
})


export default SignInSchema;