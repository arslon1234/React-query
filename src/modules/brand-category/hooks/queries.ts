import { useQuery } from "@tanstack/react-query";
import { getBrandCategory } from "../service";
import { GetBrandCategory } from "../types";
export function useSubCategory(data:GetBrandCategory) {
    const {params,id} = data
    return useQuery({
        queryKey: ["brand-category", id, params],
        queryFn: ()=> getBrandCategory(data),
        enabled: !!id
    })
}
