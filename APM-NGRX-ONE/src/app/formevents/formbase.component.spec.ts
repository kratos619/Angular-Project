import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbaseComponent } from './formbase.component';

describe('FormbaseComponent', () => {
  let component: FormbaseComponent;
  let fixture: ComponentFixture<FormbaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormbaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
