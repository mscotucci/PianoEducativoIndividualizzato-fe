import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeiDocumentsService } from '../pei-documents.service';
import { PeiDocument } from '../pei-documents.types';

@Component({
  selector: 'pei-documents-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class PeiDocumentsListComponent implements OnInit {

  peiDocuments$: Observable<PeiDocument[]>;

  constructor(private peiDocumentsService:PeiDocumentsService) { }

  ngOnInit(): void {
    this.peiDocumentsService.getPeiDocuments().subscribe();
    this.peiDocuments$ = this.peiDocumentsService.peiDocuments$;
  }

}
