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
    
    public meuEvento: TipoEvento;
    public modoDeEdicao = false;
    public	tiposEventosForm:	FormGroup;
    
    
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
                    

                    //this.tiposEventosForm	=	this.formBuilder.group({
					//	convidado:["", Validators.required],
					//});
				}
                  

    iniciarEdicao(){
        this.modoDeEdicao = true;
    }
    cancelarEdicao(){
        this.modoDeEdicao = false;
    }

    submit(inputNome){
        this.meuEventosService.updateCliente(inputNome.value,this.meuEvento);
        this.modoDeEdicao = false;
        this.toastService.presentToast('Gravação bem sucedida',	3000, 'top');
		
	}
    

}

