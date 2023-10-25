import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TimesheetEntryComponent } from './timesheet-entry/timesheet-entry.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { HolidayCalendarComponent } from './holiday-calendar/holiday-calendar.component';
import { TimesheetWorkflowComponent } from './timesheet-workflow/timesheet-workflow.component';
import { EmailNotificationComponent } from './email-notification/email-notification.component';
import { RemaindersComponent } from './reminders/reminders.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TimesheetEntryComponent,
    LeaveApplicationComponent,
    HolidayCalendarComponent,
    TimesheetWorkflowComponent,
    EmailNotificationComponent,
    RemaindersComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
