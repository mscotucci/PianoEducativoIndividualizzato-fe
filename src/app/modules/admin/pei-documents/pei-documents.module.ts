import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeiDocumentsRoutingModule } from './pei-documents-routing.module';
import { PeiDocumentsComponent } from './pei-documents.component';


@NgModule({
  declarations: [
    PeiDocumentsComponent
  ],
  imports: [
    CommonModule,
    PeiDocumentsRoutingModule
  ]
})
export class PeiDocumentsModule { }
