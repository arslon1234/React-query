import { useQuery } from "@tanstack/react-query";
import { getCategory } from "../service";
import { Params } from "@types";
export function useCategory(params:Params) {
    return useQuery({
        queryKey: ["category", params],
        queryFn: ()=> getCategory(params)
    })
}
