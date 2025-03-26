"use server";
import axios, { isAxiosError } from "axios";
import { APIUrls } from "./urls";
import { PostProps } from "@/types";

type getServicesProps = {
  search?: string;
  page: number;
  pageSize: number;
};

export const postService = async (formData: PostProps) => {
  try {
    const response = await axios.post(`${APIUrls.servicios.all}`, formData);
    return response.data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message);
    }
  }
};

export const getServices = async ({
  search,
  page,
  pageSize,
}: getServicesProps) => {
  const offset = (page - 1) * pageSize;
  const { data } = await axios(
    `${APIUrls.servicios.all}?limit=${pageSize}&offset=${offset}${
      search ? `&name=${search}` : ""
    }`,
  );
  console.log(data);
  return data;
};

export const getServicesHome = async () => {
  try {
    const { data } = await axios(`${APIUrls.servicios.all}?limit=3&offset=0`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getServiceById = async (id: string) => {
  const { data } = await axios(`${APIUrls.servicios.all}/${id}`);
  return data;
};

export const editService = async (id: string, bodyUpdate: any) => {
  try {
    const response = await axios.put(
      `${APIUrls.servicios.all}/${id}`,
      bodyUpdate,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const serviceUpdateAvailabilityService = async (id: string) => {
  const response = axios.patch(`${APIUrls.servicios.all}/${id}`);
  return response;
};

export const deleteService = async (id: string) => {
  try {
    const response = await axios.delete(`${APIUrls.servicios.all}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
