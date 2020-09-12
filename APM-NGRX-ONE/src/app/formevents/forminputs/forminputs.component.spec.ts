import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForminputsComponent } from './forminputs.component';

describe('ForminputsComponent', () => {
  let component: ForminputsComponent;
  let fixture: ComponentFixture<ForminputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForminputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForminputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
