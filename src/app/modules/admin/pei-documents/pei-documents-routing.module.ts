import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeiDocumentsListComponent } from './list/list.component';
import { DocumentComponent } from './manage/document/document.component';
import { PeiDocumentsComponent } from './pei-documents.component';
import { PeiDocumentsResolver } from './pei-documents.resolver';

const routes: Routes = [
  {
    path: '',
    component: PeiDocumentsComponent,
    children: [
      {
        path: '',
        component: PeiDocumentsListComponent
      },
      {
        path: 'manage/:id',
        component: DocumentComponent,
        resolve: {
          document: PeiDocumentsResolver
        }
      },
      {
        path: 'manage',
        component: DocumentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeiDocumentsRoutingModule { }
