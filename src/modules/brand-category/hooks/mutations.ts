import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBrandCategory, deleteBrandCategory, updateBrandCategory } from "../service";
import { BrandCategoryType } from "../types";
import { Notification } from "@utils/notification";

// ========= CREATE ===========
export function useCreateBrandCategory(){
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data:BrandCategoryType)=> createBrandCategory(data),
        onSuccess:(response)=>{
            Notification("success", response.message)
        },
        onSettled: async (_,error)=>{
            if(error){
                Notification("error", error?.message)
            }else {
                await queryClient.invalidateQueries({queryKey: ["brand-category"]})
            }
        }
    })
}

// ========= UPDATE ===========
export function useUpdateBrandCategory() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (data:BrandCategoryType)=> updateBrandCategory(data),
        onSuccess:(response)=>{
            Notification("success", response.message)
        },
        onSettled: async (_,error)=>{
            if(error){
                Notification("error", error.message)
            }else {
                await queryClient.invalidateQueries({queryKey:["brand-category"]})
            }
        }
    })
}

// ========= DELETE ===========
export function useDeleteBrandCategory() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (id:string | number)=> deleteBrandCategory(id),
        onSuccess:(response)=>{
            Notification("success", response?.message)
        },
        onSettled: async (_,error)=>{
            if(error){
                Notification("error", error?.message)
            }else {
               await queryClient.invalidateQueries({queryKey: ["brand-category"]})
            }
        }
    })
}
