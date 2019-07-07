import	{	Injectable	}	from '@angular/core';
import { TipoCliente } from '../models/tipo-cliente.models';
@Injectable({
		providedIn:	'root'
})
export	class TipoClienteService	{


    private tiposCliente;
        

    constructor()	{	}

    getById(id:	number): TipoCliente	{
        const	tipoClienteSelecionado	=	this.tiposCliente.filter(
            tipocliente	=>	tipocliente.id	===	id
    );
    
    return	tipoClienteSelecionado[0];
    }

    private	getIndexOfElement(id: number): number {
        return this.tiposCliente.indexOf(this.getById(id));
    }

    update(tipoEvento: TipoCliente)	{
        if(tipoEvento.id <0){
            tipoEvento.id = this.tiposCliente[this.tiposCliente.length -1].id+1;
            this.tiposCliente.push(tipoEvento);
        }else{
            this.tiposCliente[this.getIndexOfElement(tipoEvento.id)] = tipoEvento;
        }        
    }
    
    remove(TipoEvento: TipoCliente) {
        this.tiposCliente.splice(this.getIndexOfElement(TipoEvento.id), 1);
      }

    getAll(){
        return this.tiposCliente;
    }



}



