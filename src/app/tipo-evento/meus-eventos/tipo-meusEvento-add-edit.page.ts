import	{	Component,	OnInit	}	from	'@angular/core';
import	{	TipoEventosService	}	from	'../../services/tipo-evento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TipoEvento } from '../../../../../vai que da bosta ne/ProjetoFinalSimples/src/app/models/tipo-evento.model';
import { ToastService } from 'src/app/services/toast.service';
import { TipoCliente } from '../../models/tipo-cliente.models';

@Component({				
        templateUrl:	'./tipo-meusEvento-add-edit.page.html'
})


export class	TipomeusEventoAddEditPage	implements	OnInit	{
    
    public meuEvento;
    public modoDeEdicao = false;
    public meuEventosForm:	FormGroup;

    
	constructor(
                    private	route:	ActivatedRoute,
					private	meuEventosService:	TipoEventosService,
					private	formBuilder: FormBuilder,
					private	toastService:	ToastService,
					private router: Router
        ){}

					
					
	ngOnInit():	void	{
                    const id: number =	Number(this.route.snapshot.paramMap.get('id'));
                    this.meuEvento = this.meuEventosService.getById(id);
                   
                  
				}

    iniciarEdicao(){
        this.modoDeEdicao = true;
    }
    cancelarEdicao(){
        this.modoDeEdicao = false;
    }

    submit(inputnome){
        let cliente: TipoCliente;
        cliente.nome = inputnome;
        this.meuEvento.convidados.push(cliente);
        console.log(cliente);
		this.modoDeEdicao = false;
	}


}

