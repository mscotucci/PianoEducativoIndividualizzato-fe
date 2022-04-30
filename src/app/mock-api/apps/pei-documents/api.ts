import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { FuseMockApiService } from '@fuse/lib/mock-api/mock-api.service';
import { FuseMockApiUtils } from '@fuse/lib/mock-api';
import { peiDocuments } from './data';

@Injectable({
    providedIn: 'root'
})
export class PeiDocumentsMockApi {
    private _peiDocuments: any[] = peiDocuments;

    /**
     * Constructor
     */
    constructor(private _fuseMockApiService: FuseMockApiService) {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void {

        this._fuseMockApiService
            .onGet('api/apps/pei-documents')
            .reply(() => [
                200,
                cloneDeep(this._peiDocuments)
            ]);

        this._fuseMockApiService
            .onGet('api/apps/pei-documents/document')
            .reply(({ request }) => {

                // Get the chat id
                const id = request.params.get('id');

                // Clone the documents
                const documents = cloneDeep(this._peiDocuments);

                // Find the chat we need
                const chat = documents.find(item => item.id === id);

                // Return the response
                return [200, chat];
            });
    }
}
