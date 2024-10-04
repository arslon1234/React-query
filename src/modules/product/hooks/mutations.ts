import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct, deleteProduct } from "../service";
import { Notification } from "@utils/notification";

// ========= CREATE ===========
export function useCreateProduct() {
    const queryClient = useQueryClient()
   return useMutation({
    mutationFn: (data:FormData)=> createProduct(data),
    onSuccess:(response)=>{
        Notification('success', response?.message)
    },
    onSettled:(_,error)=>{
        if(error){
            Notification("error", error.message)
        }else {
            queryClient.invalidateQueries({queryKey: ["product"]})
        }
    }
   })
}

// ========= UPDATE ===========
// export function useUpdateBrand() {
//     const queryClient = useQueryClient()
//    return useMutation({
//     mutationFn: (data: BrandType)=> updateBrand(data),
//     onSuccess:(response)=>{
//         Notification('success', response?.message)
//     },
//     onSettled:(_,error)=>{
//         if(error){
//             Notification("error", error.message)
//         }else {
//             queryClient.invalidateQueries({queryKey: ["brand"]})
//         }
//     }
//    })
// }

// ========= DELETE ===========
export function useDeleteProduct() {
    const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: string | number) => deleteProduct(id),
    onSuccess:(response)=>{
        Notification("success", response.message)
    },
    onSettled:(_,error)=>{
        if(error){
            Notification("error", error.message)
        }else {
            queryClient.invalidateQueries({queryKey: ["product"]})
        }
    }
  });
}
