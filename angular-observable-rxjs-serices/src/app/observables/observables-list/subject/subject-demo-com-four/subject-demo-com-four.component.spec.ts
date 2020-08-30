import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDemoComFourComponent } from './subject-demo-com-four.component';

describe('SubjectDemoComFourComponent', () => {
  let component: SubjectDemoComFourComponent;
  let fixture: ComponentFixture<SubjectDemoComFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectDemoComFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectDemoComFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
