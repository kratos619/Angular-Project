import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormoutputComponent } from './formoutput.component';

describe('FormoutputComponent', () => {
  let component: FormoutputComponent;
  let fixture: ComponentFixture<FormoutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormoutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormoutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
