import {api} from "./api"

export async function listarAreaPorId(Id: number){
    try{
        const response = await api.get("Area/" + Id);
        return response.data;
    }catch(error: any) {
        throw new Error(error.response.data)
    }

}