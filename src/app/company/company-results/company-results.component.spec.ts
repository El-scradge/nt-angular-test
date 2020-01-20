import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyResultsComponent } from './company-results.component';

describe('CompanyResultsComponent', () => {
  let component: CompanyResultsComponent;
  let fixture: ComponentFixture<CompanyResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
