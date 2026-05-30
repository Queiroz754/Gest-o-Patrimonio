import { api } from "./api"

export async function getPatrimonio() {
    try {
        const responsePatrimonio = await api.get("Patrimonio");

        return responsePatrimonio.data;
    } catch (error: any) {
        throw new Error(error.response.data);
    }
}

export async function getListarPorId(id: number) {
    try {
        const responsePatrimonio = await api.get("Patrimonio/" + id);
        return responsePatrimonio.data;

    } catch (error: any) {
        throw new Error(error.response.data)
    }
}