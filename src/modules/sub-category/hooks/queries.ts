import { useQuery } from "@tanstack/react-query";
import { getSubCategory } from "../service";
import { GetSubCategory } from "../types";
import { Params } from "@types";
export function useSubCategory(data:GetSubCategory) {
    const {params,id} = data
    return useQuery({
        queryKey: ["sub-category", id, params],
        queryFn: ()=> getSubCategory(data),
        enabled: !!id
    })
}
