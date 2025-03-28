"use server";
import { cookies } from "next/headers";
import axios, { isAxiosError } from "axios";
import { APIUrls } from "./urls";
import { CreateT } from "@/types";

type getProductsProps = {
  search?: string;
  page: number;
  pageSize: number;
};

export const postProduct = async (values: CreateT) => {
  const cookieStore = cookies();
  try {
    const { data } = await axios.post(`${APIUrls.productos.all}`, values, {
      headers: {
        authorization: `Bearer ${cookieStore.get("token")?.value}`,
      },
    });
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      console.log(error.response.data);
      return error.response.data;
    }
  }
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
    }`,
  );
  return data;
};

export const getProductsHome = async () => {
  const { data } = await axios(`${APIUrls.productos.all}?limit=3&offset=0`);
  console.log(data);
  return data;
};

export const getProductById = async (id: string) => {
  const { data } = await axios(`${APIUrls.productos.all}/${id}`);
  return data;
};

export const updateProduct = async (id: string, body: PostProps) => {
  const { data } = await axios.put(`${APIUrls.productos.all}/${id}`, body);
  return data;
};

export const productUpdateAvailibilityService = async (id: string) => {
  const response = await axios.patch(`${APIUrls.productos.all}/${id}`);
  return response.data;
};

export const deleteProduct = async (id: string) => {
  const { data } = await axios.delete(`${APIUrls.productos.all}/${id}`);
  return data;
};
