import	{	Injectable	}	from '@angular/core';
import { TipoEvento } from '../models/tipo-evento.model';
@Injectable({
		providedIn:	'root'
})
export	class TipoEventosService	{


    private tiposEventos: TipoEvento[] = [
        {
        id: 1,
            nome: " aniversairo Kahe",
            cidade: "medianeira",
            bairro: "centro",
            endereco: "avenida brasil",
            convidados:[{
                id: 1,
                    nome: "kahe"
                },
                {
                id: 2,
                    nome: "henrique"
                },
                {
                id: 3,
                    nome: "binda"
                }
            ]
        },
        {
        id: 2,
            nome: " aniversairo Fernadno",
            cidade: "Sao miguel",
            bairro: "centro",
            endereco: "avenida torres",
            convidados: [
                {
                id: 1,
                    nome: "fernando"
                },
                {
                id: 2,
                    nome: "carol"
                },
                {
                id: 3,
                    nome: "luiz"
                },
            ]
        },
        {
        id: 3,
            nome: " balada",
            cidade: "foz",
            bairro: "centro",
            endereco: "avenida parana",
            convidados: [
                {
                id: 1,
                    nome: "ana"
                },
                {
                id: 2,
                    nome: "barbara"
                },
                {
                id: 3,
                    nome: "fernanda"
                },
            ]
        }
    ];
; 

    constructor()	{	}

    getById(id:	number): TipoEvento	{
        const	tipoEventoSelecionado	=	this.tiposEventos.filter(
            tipoevento	=>	tipoevento.id	===	id
    );
    
    return	tipoEventoSelecionado[0];
    }

    private	getIndexOfElement(id: number): number {
        return this.tiposEventos.indexOf(this.getById(id));
    }

    update(tipoEvento: TipoEvento)	{
        if(tipoEvento.id <0){
            tipoEvento.id = this.tiposEventos[this.tiposEventos.length -1].id+1;
            this.tiposEventos.push(tipoEvento);
        }else{
            this.tiposEventos[this.getIndexOfElement(tipoEvento.id)] = tipoEvento;
        }        
    }
    
    remove(TipoEvento: TipoEvento) {
        this.tiposEventos.splice(this.getIndexOfElement(TipoEvento.id), 1);
      }

    getAll(){
        return this.tiposEventos;
    }



}



