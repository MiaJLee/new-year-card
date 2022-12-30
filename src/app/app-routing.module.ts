import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor/component/editor/editor.component';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CardViewerComponent } from './viewer/component/card-viewer/card-viewer.component';

const routes: Routes = [
	{ path: '', component: LandingComponent },
	{ path: 'editor', component: EditorComponent },
	{
		path: 'card/:id',
		component: CardViewerComponent,
		children: [{ path: 'preview', component: CardViewerComponent }],
	},
	{
		path: '404',
		component: NotFoundComponent,
	},
	{ path: '**', redirectTo: '404' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
