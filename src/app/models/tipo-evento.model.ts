import { TipoCliente } from './tipo-cliente.models';
import { TipoConta } from './tipo-conta.models';

export interface	TipoEvento	{
    id:	number;
    nome: string;
    endereco: string;
    bairro:	string;
    cidade:	string;
    convidados: string[];
    
    
}