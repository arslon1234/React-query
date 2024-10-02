import { useQuery } from "@tanstack/react-query";
import { getBrand } from "../service";
import { Params } from "@types";
export function useBrand(params:Params){
    return useQuery({
        queryKey: ["brand", params],
        queryFn: ()=> getBrand(params)
    })
}