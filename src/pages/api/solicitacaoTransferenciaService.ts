import {api} from "./api";

export async function listarPorIdProduto(Id: number){
    try{
        const response = await api.get("SolicitacaoTransferencia/" + Id);
        return response.data;
    }catch(error: any) {
        throw new Error(error.response.data)
    }

}