import	{	Component,	OnInit	}	from	'@angular/core';
import	{	TipoEventosService	}	from	'../../services/tipo-evento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TipoEvento } from '../../../../../vai que da bosta ne/ProjetoFinalSimples/src/app/models/tipo-evento.model';
import { ToastService } from 'src/app/services/toast.service';

@Component({				
        templateUrl:	'./tipo-evento-add-edit.page.html'
})


export class	TipoEventoAddEditPage	implements	OnInit	{
	private	tiposEvento: TipoEvento;
	public	tiposEventosForm:	FormGroup;
	public modoDeEdicao = false;

	constructor(
					private	route:	ActivatedRoute,
					private	tipoEventosService:	TipoEventosService,
					private	formBuilder: FormBuilder,
					private	toastService:	ToastService,
					private router: Router
					)	{}

					
					
	ngOnInit():	void {
					const id: number =	Number(this.route.snapshot.paramMap.get('id'));
					
					if(id > 0){
						this.tiposEvento = this.tipoEventosService.getById(id);
					}else{
						this.tiposEvento = {id: id, 
											nome:"", 
											endereco:"", 
											bairro:"", 
											cidade:"",
											convidados:[] 
											};
											this.modoDeEdicao = true;
						
						}
					this.tiposEventosForm	=	this.formBuilder.group({
						id: [this.tiposEvento.id],
						nome: [this.tiposEvento.nome, Validators.required],
						endereco: [this.tiposEvento.endereco, Validators.required],
						bairro: [this.tiposEvento.bairro, Validators.required],
						cidade: [this.tiposEvento.cidade, Validators.required],
						convidados:[this.tiposEvento.convidados, Validators.required],
						
						
					});
				}

	iniciarEdicao(){
		this.modoDeEdicao = true;
	}

	cancelarEdicao(){
		this.modoDeEdicao = false;
		
	}


	submit(){
        this.tipoEventosService.update(this.tiposEventosForm.value);
		this.modoDeEdicao = false;
		this.toastService.presentToast('Gravação bem sucedida',	3000, 'top');
		this.router.navigateByUrl('');
	}


}

