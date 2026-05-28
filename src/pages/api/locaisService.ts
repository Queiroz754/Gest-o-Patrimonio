import {api} from "./api"

export async function getLocal() {
    try {
        const responsePatrimonio = await api.get("Localizacao");
        return responsePatrimonio;
    } catch (error: any) {
        throw new Error(error.response.data);
    }
}