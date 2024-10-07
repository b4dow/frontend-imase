"use server";

import { updateProduct } from "@/services/api";
import {  PostProps } from "@/types";

export const editProductAction = async (id: string, data: PostProps) => {
    const response = await updateProduct(id, data);
    return response;
}