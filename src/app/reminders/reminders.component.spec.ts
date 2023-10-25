import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemaindersComponent } from './reminders.component';

describe('RemaindersComponent', () => {
  let component: RemaindersComponent;
  let fixture: ComponentFixture<RemaindersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemaindersComponent]
    });
    fixture = TestBed.createComponent(RemaindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
