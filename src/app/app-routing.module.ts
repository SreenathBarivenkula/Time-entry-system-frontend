import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TimesheetEntryComponent } from './timesheet-entry/timesheet-entry.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { HolidayCalendarComponent } from './holiday-calendar/holiday-calendar.component';
import { TimesheetWorkflowComponent } from './timesheet-workflow/timesheet-workflow.component';
import { EmailNotificationComponent } from './email-notification/email-notification.component';
import { RemaindersComponent } from './reminders/reminders.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'timesheet-entry', component: TimesheetEntryComponent },
  { path: 'leave-application', component: LeaveApplicationComponent },
  { path: 'holiday-calendar', component: HolidayCalendarComponent },
  { path: 'timesheet-workflow', component: TimesheetWorkflowComponent },
  { path: 'email-notification', component: EmailNotificationComponent },
  { path: 'remainders', component: RemaindersComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
