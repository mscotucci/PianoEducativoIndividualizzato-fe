import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject, takeUntil } from 'rxjs';
import { PeiDocumentsService } from '../pei-documents.service';
import { PeiDocument } from '../pei-documents.types';

@Component({
  selector: 'pei-documents-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeiDocumentsListComponent implements OnInit, OnDestroy {

  @ViewChild('recentTransactionsTable', { read: MatSort }) peiDocumentsTableMatSort: MatSort;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  data: PeiDocument[];
  peiDocumentsTableColumns: string[] = ['year', 'dataRilascio', 'alunno', 'scuola', 'actions'];
  peiDocumentsDataSource: MatTableDataSource<any> = new MatTableDataSource();

  constructor(private peiDocumentsService:PeiDocumentsService) { }

  ngOnInit(): void {

    // Get the data
    this.peiDocumentsService.getPeiDocuments()
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((data) => {

        // Store the data
        this.data = data;

        // Store the table data
        this.peiDocumentsDataSource.data = data;

      });
  }

  /**
     * After view init
     */
  ngAfterViewInit(): void {
    // Make the data source sortable
    this.peiDocumentsDataSource.sort = this.peiDocumentsTableMatSort;
  }

  /**
     * On destroy
     */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
  trackByFn(index: number, item: any): any {
    return item.Id || index;
  }
}
