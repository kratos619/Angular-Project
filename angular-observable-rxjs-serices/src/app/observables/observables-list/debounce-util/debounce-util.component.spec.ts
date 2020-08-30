import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceUtilComponent } from './debounce-util.component';

describe('DebounceUtilComponent', () => {
  let component: DebounceUtilComponent;
  let fixture: ComponentFixture<DebounceUtilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebounceUtilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebounceUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
