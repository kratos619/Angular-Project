import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeargeComponent } from './mearge.component';

describe('MeargeComponent', () => {
  let component: MeargeComponent;
  let fixture: ComponentFixture<MeargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
