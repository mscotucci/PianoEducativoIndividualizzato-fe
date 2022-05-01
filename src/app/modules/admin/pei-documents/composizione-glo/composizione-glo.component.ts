import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { PeiDocumentsService } from '../pei-documents.service';
import { PeiDocument } from '../pei-documents.types';

@Component({
  selector: 'composizione-glo',
  templateUrl: './composizione-glo.component.html'
})
export class ComposizioneGloComponent implements OnInit, OnDestroy {

  formGroup: FormGroup;
  document: PeiDocument;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(private _formBuilder: FormBuilder,
    private _changeDetectorRef: ChangeDetectorRef,
    private _peiDocumentsService: PeiDocumentsService) { }

  get glos() {
    return this.formGroup.controls["glos"] as FormArray;
  }


  ngOnInit(): void {

    this.formGroup = this._formBuilder.group({
      glos: this._formBuilder.array([])
    });

    // Get the document
    this._peiDocumentsService.peiDocument$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((document: PeiDocument) => {

        // Get the document
        this.document = document;

        document.gruppoLavoroOperativo.operatori.forEach(x => {
          let operatoreGroup = this._formBuilder.group({
            nome: [null, Validators.required],
            cognome: [null, Validators.required],
            titoloIntervento: [null, Validators.required]
          });
          operatoreGroup.patchValue(x);
          this.glos.push(operatoreGroup);
        })

        // Mark for check
        this._changeDetectorRef.markForCheck();
      });
  }

  deleteOpertatore(operatoreIndex: number) {
    this.glos.removeAt(operatoreIndex);
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();

  }
}