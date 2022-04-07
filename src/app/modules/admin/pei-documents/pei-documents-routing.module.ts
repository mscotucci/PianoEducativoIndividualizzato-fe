import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeiDocumentsListComponent } from './list/list.component';
import { PeiDocumentsComponent } from './pei-documents.component';

const routes: Routes = [
  {
    path: '',
    component: PeiDocumentsComponent,
    children: [
      {
        path: '',
        component: PeiDocumentsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeiDocumentsRoutingModule { }
