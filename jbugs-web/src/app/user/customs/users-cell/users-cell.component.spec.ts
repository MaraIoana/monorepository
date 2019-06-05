import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersCellComponent } from './users-cell.component';

describe('UsersCellComponent', () => {
  let component: UsersCellComponent;
  let fixture: ComponentFixture<UsersCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
