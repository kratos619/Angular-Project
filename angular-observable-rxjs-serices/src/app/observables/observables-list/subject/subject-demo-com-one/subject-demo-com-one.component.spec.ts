import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDemoComOneComponent } from './subject-demo-com-one.component';

describe('SubjectDemoComOneComponent', () => {
  let component: SubjectDemoComOneComponent;
  let fixture: ComponentFixture<SubjectDemoComOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectDemoComOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectDemoComOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
