import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsOneComponent } from './forms-one.component';

describe('FormsOneComponent', () => {
  let component: FormsOneComponent;
  let fixture: ComponentFixture<FormsOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
