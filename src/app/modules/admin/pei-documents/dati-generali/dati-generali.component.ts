import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { PeiDocumentsService } from '../pei-documents.service';
import { PeiDocument } from '../pei-documents.types';

@Component({
  selector: 'dati-generali',
  templateUrl: './dati-generali.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatiGeneraliComponent implements OnInit, OnDestroy {

  formGroup: FormGroup;
  document: PeiDocument;

  private _unsubscribeAll: Subject<any> = new Subject<any>();
  /**
   * Constructor
   */
  constructor(
    private _formBuilder: FormBuilder,
    private _changeDetectorRef: ChangeDetectorRef,
    private _peiDocumentsService: PeiDocumentsService)
  {
  }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      year:[null],
      alunno: [''],
      codiceSostitutivoPersonale: [''],
      classe: [''],
      scuola:[''],
      plessoSede: [''],
      dataRilascio: [null],
      dataScadenza: [null],
      dataRedazioneProfiloFunzionamento: [null],
      profiloFunzionamentoDisponibile: [false],
      dataRedazioneDiagnosiFunzionale: [null],
      dataApprovazioneProfiloDinamicoFunzionale: [null],
      dataRedazioneProgettoIndividuale: [null],
      dataPeiProvvisorio: [null],
      numeroVerbalePeiProvvisorio: [''],
      dataPrimaSottoscrizione: [null],
      numeroVerbalePrimaSottoscrizione: [''],
      dataVerificaFinaleProposteASSuccessivo: [null],
      numeroVerbaleVerificaFinaleProposteASSuccessivo: [''],
      dataVerificaIntermedia: [null],
      numeroVerbaleVerificaIntermedia: ['']
    });
    // Get the document
    this._peiDocumentsService.peiDocument$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((document: PeiDocument) => {

        // Get the document
        this.document = document;

        // Patch values to the form
        this.formGroup.patchValue(document);

        // Mark for check
        this._changeDetectorRef.markForCheck();
      });
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
