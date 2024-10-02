import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSubCategory, deleteSubCategory, updateSubCategory } from "../service";
import { SubCategoryType } from "../types";
import { Notification } from "@utils/notification";

// ========= CREATE ===========
export function useCreateSubCategory(){
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data:SubCategoryType)=> createSubCategory(data),
        onSuccess:(response)=>{
            Notification("success", response?.message)
        },
        onSettled: async (_,error)=>{
            if(error){
                Notification("error", error?.message)
            }else {
                await queryClient.invalidateQueries({queryKey: ["sub-category"]})
            }
        }
    })
}

// ========= UPDATE ===========
export function useUpdateSubCategory() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data:SubCategoryType)=> updateSubCategory(data),
        onSuccess:(response)=>{
            Notification("success", response.message)
        },
        onSettled: async (_,error,variables)=>{
            if(error){
                Notification("error", error.message)
            }else {
                await queryClient.invalidateQueries({queryKey:["sub-category"]})
            }
        }
    })
}

// ========= DELETE ===========
export function useDeleteSubCategory() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (id:string | number)=> deleteSubCategory(id),
        onSuccess:(response)=>{
            Notification("success", response?.message)
        },
        onSettled: async (_,error)=>{
            if(error){
                Notification("error", error?.message)
            }else {
               await queryClient.invalidateQueries({queryKey: ["sub-category"]})
            }
        }
    })
}
