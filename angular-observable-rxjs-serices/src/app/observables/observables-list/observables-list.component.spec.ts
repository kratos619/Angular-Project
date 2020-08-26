import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesListComponent } from './observables-list.component';

describe('ObservablesListComponent', () => {
  let component: ObservablesListComponent;
  let fixture: ComponentFixture<ObservablesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
