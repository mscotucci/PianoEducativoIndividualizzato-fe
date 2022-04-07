import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Subject, takeUntil } from 'rxjs';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit, OnDestroy {
  @ViewChild('drawer') drawer: MatDrawer;
  drawerMode: 'over' | 'side' = 'side';
  drawerOpened: boolean = true;
  panels: any[] = [];
  selectedPanel: string = 'alunno';
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor
   */
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _fuseMediaWatcherService: FuseMediaWatcherService
  ) {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Setup available panels
    this.panels = [
      {
        id: 'alunno',
        icon: 'heroicons_outline:user-circle',
        title: 'Alunno',
        description: 'Informazioni riguardanti l\'alunno'
      },
      {
        id: 'composizione-glo',
        icon: 'heroicons_outline:user-group',
        title: 'Composizione GLO',
        description: 'Gruppo di Lavoro Operativo per l\'inclusione'
      },
      {
        id: 'quadro-informativo',
        icon: 'heroicons_outline:credit-card',
        title: 'Quadro informativo',
        description: 'Sezione informativa dell\'alunno a cura dei genitori e responsabili'
      },
      {
        id: 'elemento-profilo-funzionamento',
        icon: 'heroicons_outline:bell',
        title: 'Elementi generali desunti dal Profilo di Funzionamento',
        description: 'Elementi generali desunti dal Profilo di Funzionamento o dalla Diagnosi Funzionale, se non disponibile'
      },
      {
        id: 'raccordo-progetto-individuale',
        icon: 'heroicons_outline:user-group',
        title: 'Raccordo con il Progetto Individuale',
        description: 'Raccordo con il Progetto Individuale di cui all’art. 14 della Legge 328/2000'
      },
      {
        id: 'interventi-alunno',
        icon: 'heroicons_outline:user-group',
        title: 'Interventi sull\'alunno',
        description: 'Osservazioni sull’alunno/a per progettare gli interventi di sostegno didattico'
      },
      {
        id: 'osservazione-contesto',
        icon: 'heroicons_outline:user-group',
        title: 'Interventi sull\'alunno',
        description: 'Osservazioni sull’alunno/a per progettare gli interventi di sostegno didattico'
      }
    ];

    // Subscribe to media changes
    this._fuseMediaWatcherService.onMediaChange$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(({ matchingAliases }) => {

        // Set the drawerMode and drawerOpened
        if (matchingAliases.includes('lg')) {
          this.drawerMode = 'side';
          this.drawerOpened = true;
        }
        else {
          this.drawerMode = 'over';
          this.drawerOpened = false;
        }

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

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Navigate to the panel
   *
   * @param panel
   */
  goToPanel(panel: string): void {
    this.selectedPanel = panel;

    // Close the drawer on 'over' mode
    if (this.drawerMode === 'over') {
      this.drawer.close();
    }
  }

  /**
   * Get the details of the panel
   *
   * @param id
   */
  getPanelInfo(id: string): any {
    return this.panels.find(panel => panel.id === id);
  }

  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
