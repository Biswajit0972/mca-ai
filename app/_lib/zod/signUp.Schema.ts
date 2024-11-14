import {z} from "zod";

export const signUpSchema = z.object({
    fullname: z.string().trim().toLowerCase(),
    username: z.string().min(3, {message: "username must be long of 3 character"}).max(10, {message: "username length must be less then 10"}).regex(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/igm, {message: "username not contains any specialCharacters"}),
    email: z.string().email({message: "Please add a valid email"}),
    state: z.string(),
    verificationCode: z.number().min(6, {message: "verification code must be length 6"}),
})
