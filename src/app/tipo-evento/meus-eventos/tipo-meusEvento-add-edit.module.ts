import	{	NgModule	}	from	'@angular/core';
import	{	CommonModule	}	from	'@angular/common';
import	{	FormsModule,	ReactiveFormsModule	}	from	'@angular/forms'
;
import	{	Routes,	RouterModule	}	from	'@angular/router';
import	{	IonicModule	}	from	'@ionic/angular';
import	{	TipomeusEventoAddEditPage	}	from	'./tipo-meusEvento-add-edit.page';
const	routes:	Routes	=	[
		{
				path:	'',
				component:	TipomeusEventoAddEditPage
		}
];
@NgModule({
		imports:	[
				CommonModule,
				FormsModule,
				IonicModule,
				RouterModule.forChild(routes),
				ReactiveFormsModule
		],
		declarations:	[TipomeusEventoAddEditPage]
})
export class	meuEventoAddEditPageModule	{}