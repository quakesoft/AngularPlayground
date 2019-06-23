import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragComponent } from './drag/drag.component';
import { ImgeditComponent } from './imgedit/imgedit.component';
import { LinksComponent } from './links/links.component';

const routes: Routes = [
  { path: '', component: LinksComponent },
  { path: 'drag', component: DragComponent },
  { path: 'imgedit', component: ImgeditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
