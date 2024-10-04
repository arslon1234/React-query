import axiosInstance from "@api";
import { Params } from "@types";

// ========= GET ===========
export const getProduct = async (params: Params = { search: "", limit: 10, page: 1 }) => {
  const response = await axiosInstance.get("products/search", {
    params,
  });
  return response.data?.data;
};
// ========= GET BRAND BY CATEGORY_ID ===========
export const getBrandById = async (id:number | undefined) => {
  const response = await axiosInstance.get(`brand/category/${id}`)
  return response.data?.data;
};
// ========= GET BRAND CATEGORY BY BRAND_ID ===========
export const getBrandCategoryById = async (id:number | undefined) => {
  const response = await axiosInstance.get(`brand-category/brand/${id}`)
  return response.data?.data;
};

// ========= CREATE ===========
export const createProduct = async (data: FormData) => {
  const response = await axiosInstance.post("products/create", data);
  return response?.data;
};

// ========= Update ===========
// export const updateProduct = async (data: ProductType) => {
//   const { id } = data;
//   delete data?.id;
//   const response = await axiosInstance.patch(`product/update/${id}`, data);
//   return response?.data;
// };

// ========= DELETE ===========
export const deleteProduct = async (id: string | number) => {
  const response = await axiosInstance.delete(`products/delete/${id}`);
  return response?.data;
};
