import axios from "axios";
import { APIUrls } from "./urls";
import { PostProps } from "@/types";

type getProductsProps = {
  search?: string;
  page: number;
  pageSize: number;
};

export const postProduct = async (data: PostProps) => {
  const response = await axios.post(`${APIUrls.productos.all}`, data);
  return response.data;
};

export const getProducts = async ({
  search,
  page,
  pageSize,
}: getProductsProps) => {
  const offset = (page - 1) * pageSize;
  const { data } = await axios(
    `${APIUrls.productos.all}?limit=${pageSize}&offset=${offset}${
      search ? `&name=${search}` : ""
    }`
  );
  return data.data;
};

export const getProductsHome = async () => {
  const { data } = await axios(`${APIUrls.productos.all}?limit=3&offset=0`);
  return data.data;
};

export const getProductById = async (id: string) => {
  const { data } = await axios(`${APIUrls.productos.all}/${id}`);
  return data.data;
};

export const updateProduct = async (id: string, body: PostProps) => {
  const response = await axios.put(`${APIUrls.productos.all}/${id}`, body);
  return response.data;
};

export const updateAvailibility = async (id: string) => {
  const response = await axios.patch(`${APIUrls.productos.all}/${id}`);
  return response.data;
};

export const deleteProduct = async (id: string) => {
  const response = await axios.delete(`${APIUrls.productos.all}/${id}`);
  return response.data;
};
