import { api } from "./api";

type UsuarioHeader = {
    usuarioID: string,
    nome: string,
    email: string,
}


export async function getUsuarioId(id: number) {
    try {
        const response = await api.get("Usuario/" + id);
        return response.data;
    }
    catch(error: any){
        throw new Error(error.response.data)
    }
    
}