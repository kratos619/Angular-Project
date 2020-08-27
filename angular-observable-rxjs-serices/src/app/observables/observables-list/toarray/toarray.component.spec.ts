import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToarrayComponent } from './toarray.component';

describe('ToarrayComponent', () => {
  let component: ToarrayComponent;
  let fixture: ComponentFixture<ToarrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToarrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
