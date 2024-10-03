import axiosInstance from "@api";
import { BrandCategoryType, GetBrandCategory } from "../types";
// ========= GET ===========
export const getBrandCategory = async (data: GetBrandCategory) => {
    const {id,params} = data
    delete params.search
  const response = await axiosInstance.get(`brand-category/brand/${id}`, {
    params,
  });
  return response.data?.data;
};

// ========= CREATE ===========
export const createBrandCategory = async (data: BrandCategoryType) => {
  const response = await axiosInstance.post("brand-category/create", data);
  return response?.data;
};

// ========= Update ===========
export const updateBrandCategory = async (data: BrandCategoryType) => {
  const { id } = data;
  delete data?.id;
  const response = await axiosInstance.patch(`brand-category/update/${id}`, data);
  return response?.data;
};

// ========= DELETE ===========
export const deleteBrandCategory = async (id: string | number) => {
  const response = await axiosInstance.delete(`brand-category/delete/${id}`);
  return response?.data;
};
