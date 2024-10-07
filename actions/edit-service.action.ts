import { editService } from "@/services/api";


export const editServiceAction = async (id: string, bodyUpdate: any) => {
    try {
        const response = await editService(id, bodyUpdate);
        return response;
    } catch (error) {
        console.log(error);
    }
}
