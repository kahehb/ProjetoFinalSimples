import { TipoProduto } from './tipo-produto.models';

export interface TipoConta	{
    id: number;
    produto: TipoProduto [];
    nome: string;
    valor: number;
}