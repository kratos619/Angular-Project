import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDemoComThreeComponent } from './subject-demo-com-three.component';

describe('SubjectDemoComThreeComponent', () => {
  let component: SubjectDemoComThreeComponent;
  let fixture: ComponentFixture<SubjectDemoComThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectDemoComThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectDemoComThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
