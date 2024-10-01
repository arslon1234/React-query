import axiosInstance from "@api";
import { Params } from "@types";
import { Category } from "../types";
// ========= GET ===========
export const getCategory = async (params: Params) => {
  const response = await axiosInstance.get("category/search", {
    params,
  });
  return response.data?.data;
};

// ========= CREATE ===========
export const createCategory = async (data: Category) => {
  const response = await axiosInstance.post("category/create", data);
  return response?.data;
};

// ========= CREATE ===========
export const updateCategory = async (data: Category) => {
  const { id } = data;
  delete data.id;
  const response = await axiosInstance.patch(`category/update/${id}`, data);
  return response?.data;
};

// ========= DELETE ===========
export const deleteCategory = async (id: string | number) => {
  const response = await axiosInstance.delete(`category/delete/${id}`);
  return response?.data;
};
