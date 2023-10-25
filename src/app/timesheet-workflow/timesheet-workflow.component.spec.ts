import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetWorkflowComponent } from './timesheet-workflow.component';

describe('TimesheetWorkflowComponent', () => {
  let component: TimesheetWorkflowComponent;
  let fixture: ComponentFixture<TimesheetWorkflowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimesheetWorkflowComponent]
    });
    fixture = TestBed.createComponent(TimesheetWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
