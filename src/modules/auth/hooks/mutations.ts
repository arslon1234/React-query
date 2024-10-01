import { useMutation } from "@tanstack/react-query";
import { SignIn, SignUp } from "../types"; 
import { signIn, signUp } from "../service";
import { saveAccessToken } from "@utils/token-service";
import { Notification } from "@utils/notification";

// ========  SignIn Mutation ==========
export function useSignIn(){
    return useMutation({
        mutationFn:(data:SignIn)=> signIn(data),
        onMutate:()=>{
            console.log('mutate')
        },
        onSuccess:(response)=>{
            const {access_token} = response?.data?.data?.tokens
            saveAccessToken(access_token)
            window.location.href = '/layout'
        },
        onError:(error)=>{
            Notification('error', error?.message)
        }
    })
}

// ========= SignUp Mutation ===========
export function useSignUp(){
    return useMutation({
        mutationFn: (data:SignUp)=> signUp(data),
        onSuccess:()=>{
            window.location.href = '/'
        },
        onError:(error)=>{
            console.log(error, 'error')
            Notification('error', error?.message)
        }
    })
}