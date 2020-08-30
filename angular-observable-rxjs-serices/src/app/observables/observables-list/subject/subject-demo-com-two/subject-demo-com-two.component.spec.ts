import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDemoComTwoComponent } from './subject-demo-com-two.component';

describe('SubjectDemoComTwoComponent', () => {
  let component: SubjectDemoComTwoComponent;
  let fixture: ComponentFixture<SubjectDemoComTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectDemoComTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectDemoComTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
