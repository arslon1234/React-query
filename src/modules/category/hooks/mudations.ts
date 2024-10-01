import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategory, deleteCategory, updateCategory } from "../service";
import { Category } from "../types";
import { Notification } from "@utils/notification";

// ========= CREATE ===========
export function useCreateCategory(){
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data:Category)=> createCategory(data),
        onSuccess:(response)=>{
            Notification("success", response?.message)
        },
        onSettled: async (_,error)=>{
            if(error){
                Notification("error", error?.message)
            }else {
                await queryClient.invalidateQueries({queryKey: ["category"]})
            }
        }
    })
}

// ========= UPDATE ===========
export function useUpdateCategory() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data:Category)=> updateCategory(data),
        onSuccess:(response)=>{
            Notification("success", response.message)
        },
        onSettled: async (_,error,variables)=>{
            if(error){
                Notification("error", error.message)
            }else {
                await queryClient.invalidateQueries({queryKey:["category", {id:variables.id}]})
            }
        }
    })
}

// ========= DELETE ===========
export function useDeleteCategory() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (id:string | number)=> deleteCategory(id),
        onSuccess:(response)=>{
            Notification("success", response?.message)
        },
        onSettled: async (_,error)=>{
            if(error){
                Notification("error", error?.message)
            }else {
               await queryClient.invalidateQueries({queryKey: ["category"]})
            }
        }
    })
}
