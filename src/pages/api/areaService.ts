import {api} from "./api"

export async function getArea() {
    try {
        const responseArea = await api.get("Area");
        return responseArea.data;
    } catch (error: any) {
        throw new Error(error.response.data);
    }
}