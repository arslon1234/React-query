import { useQuery } from "@tanstack/react-query";
import { getBrandById, getBrandCategoryById, getProduct } from "../service";
import { Params } from "@types";
// ========= GET PRODUCT ===========
export function useProduct(params:Params) {
    return useQuery({
        queryKey: ["product", params],
        queryFn: ()=> getProduct(params)
    })
}
// ========= GET BRAND BY CATEGORY_ID ===========
export function useBrandById(id:number) {
    return useQuery({
        queryKey: ["brand", id],
        queryFn: ()=> getBrandById(id)
    })
}
// ========= GET BRAND BY CATEGORY_ID ===========
export function useBrandCategoryById(id:number) {
    return useQuery({
        queryKey: ["brand-category", id],
        queryFn: ()=> getBrandCategoryById(id)
    })
}
