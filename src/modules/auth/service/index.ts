import axiosInstance from "@api";
import { SignIn,SignUp } from "../types";
export const signIn = async (data:SignIn) => {
    return await axiosInstance.post("auth/sign-in", data)
}
export const signUp = async (data:SignUp) => {
    return await axiosInstance.post("auth/admin/sign-up", data)
}