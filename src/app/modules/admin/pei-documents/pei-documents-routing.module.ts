import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeiDocumentsComponent } from './pei-documents.component';

const routes: Routes = [{ path: '', component: PeiDocumentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeiDocumentsRoutingModule { }
