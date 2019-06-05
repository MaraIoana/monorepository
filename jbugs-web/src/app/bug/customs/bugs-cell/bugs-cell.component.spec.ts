import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugsCellComponent } from './bugs-cell.component';

describe('BugsCellComponent', () => {
  let component: BugsCellComponent;
  let fixture: ComponentFixture<BugsCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugsCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
