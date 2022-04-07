import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { PeiDocument } from './pei-documents.types';

@Injectable({providedIn: 'root'})
export class PeiDocumentsService {

    private _peiDocuments: BehaviorSubject<PeiDocument[] | null> = new BehaviorSubject(null);

    constructor(private _httpClient: HttpClient) { }

    get peiDocuments$(): Observable<PeiDocument[]>
    {
        return this._peiDocuments.asObservable();
    }

    getPeiDocuments(): Observable<PeiDocument[]>
    {
        return this._httpClient.get<PeiDocument[]>('api/apps/pei-documents').pipe(
            tap((response: PeiDocument[]) => {
                this._peiDocuments.next(response);
            })
        );
    }
}