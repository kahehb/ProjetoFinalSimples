import { Injectable, NgModule } from '@angular/core';
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
            convidados:["kahe","henrique","binda"]
        },
        
        {
        id: 2,
            nome: " aniversairo Fernadno",
            cidade: "Sao miguel",
            bairro: "centro",
            endereco: "avenida torres",
            convidados:["Luiz","henrique","Viola"]
        },       
        {
        id: 3,
            nome: " balada",
            cidade: "foz",
            bairro: "centro",
            endereco: "avenida parana",
            convidados:["Afons","Cardoso","Padilha"]
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

         
    updateCliente(convidado: string ,tipoEvento: TipoEvento){
        this.tiposEventos[this.getIndexOfElement(tipoEvento.id)].convidados.push(convidado);
    
        //console.log(this.tiposEventos[this.getIndexOfElement(tipoEvento.id)].convidados);
    }
    
    
    remove(TipoEvento: TipoEvento) {
        this.tiposEventos.splice(this.getIndexOfElement(TipoEvento.id), 1);
      }


    getAll(){
        return this.tiposEventos;
    }



}



