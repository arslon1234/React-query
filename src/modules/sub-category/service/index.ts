import axiosInstance from "@api";
import { SubCategoryType, GetSubCategory } from "../types";
// ========= GET ===========
export const getSubCategory = async (data: GetSubCategory) => {
    const {id,params} = data
  const response = await axiosInstance.get(`sub-category/search/${id}`, {
    params,
  });
  return response.data?.data;
};

// ========= CREATE ===========
export const createSubCategory = async (data: SubCategoryType) => {
  const response = await axiosInstance.post("sub-category/create", data);
  return response?.data;
};

// ========= Update ===========
export const updateSubCategory = async (data: SubCategoryType) => {
  const { id } = data;
  delete data.id;
  const response = await axiosInstance.patch(`sub-category/update/${id}`, data);
  return response?.data;
};

// ========= DELETE ===========
export const deleteSubCategory = async (id: string | number) => {
  const response = await axiosInstance.delete(`sub-category/delete/${id}`);
  return response?.data;
};
