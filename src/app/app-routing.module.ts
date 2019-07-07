import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './tipo-evento/listagem/tipo-evento-listagem.module#TipoEventoListagemModule' },
  {	path:	'add-edit/:id',	loadChildren:	'./tipo-evento/add-edit/tipo-evento-add-edit.module#eventoAddEditPageModule'},
  {	path:	'meus-eventos/:id',	loadChildren:	'./tipo-evento/meus-eventos/tipo-meusEvento-add-edit.module#meuEventoAddEditPageModule'}	

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
