import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeiDocumentsRoutingModule } from './pei-documents-routing.module';
import { PeiDocumentsComponent } from './pei-documents.component';
import { DocumentComponent } from './manage/document/document.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { PeiDocumentsListComponent } from './list/list.component';

@NgModule({
  declarations: [
    PeiDocumentsComponent,
    DocumentComponent,
    PeiDocumentsListComponent
  ],
  imports: [
    CommonModule,
    PeiDocumentsRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    FuseAlertModule,
    SharedModule
  ]
})
export class PeiDocumentsModule { }
