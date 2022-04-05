import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeiDocumentsComponent } from './pei-documents.component';

describe('PeiDocumentsComponent', () => {
  let component: PeiDocumentsComponent;
  let fixture: ComponentFixture<PeiDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeiDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeiDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
