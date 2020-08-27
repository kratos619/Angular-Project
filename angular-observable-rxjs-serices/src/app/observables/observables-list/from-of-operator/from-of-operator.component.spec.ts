import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromOfOperatorComponent } from './from-of-operator.component';

describe('FromOfOperatorComponent', () => {
  let component: FromOfOperatorComponent;
  let fixture: ComponentFixture<FromOfOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromOfOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromOfOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
