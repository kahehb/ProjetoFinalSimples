import	{	Component,	OnInit, ViewChild	}	from	'@angular/core';
import { TipoEventosService } from 'src/app/services/tipo-evento.service';
import { ToastService } from '../../services/toast.service';
import { IonList } from '@ionic/angular';
import { TipoEvento } from '../../models/tipo-evento.model';
@Component({
				templateUrl:	'./tipo-evento-listagem.page.html'
})
export class	TipoEventoListagemPage	implements	OnInit	{
				
	public tiposEventos;
	
	@ViewChild('slidingList') slidingList: IonList;
	constructor(
		private	tipoEventosService:	TipoEventosService,
		private toastService :ToastService
	){}

	ngOnInit():void{
		this.tiposEventos = this.tipoEventosService.getAll();
	}	
		
	async removerTipoEvento(tipoEvento: TipoEvento) {
		this.tipoEventosService.remove(tipoEvento);
		this.toastService.presentToast('Tipo de serviço removido', 3000, 'top');
		await this.slidingList.closeSlidingItems();
	  }


}
