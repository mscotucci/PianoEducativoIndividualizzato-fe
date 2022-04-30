import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";
import { PeiDocumentsService } from "./pei-documents.service";
import { PeiDocument } from "./pei-documents.types";

@Injectable({
    providedIn: 'root'
})
export class PeiDocumentsResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(
        private _peiDocumentsService: PeiDocumentsService,
        private _router: Router
    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PeiDocument> {
        return this._peiDocumentsService.getPeiDocument(route.paramMap.get('id'))
            .pipe(
                // Error here means the requested contact is not available
                catchError((error) => {

                    // Log the error
                    console.error(error);

                    // Get the parent url
                    const parentUrl = state.url.split('/').slice(0, -1).join('/');

                    // Navigate to there
                    this._router.navigateByUrl(parentUrl);

                    // Throw an error
                    return throwError(error);
                })
            );
    }
}