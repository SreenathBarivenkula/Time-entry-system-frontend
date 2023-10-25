import { Component,OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-timesheet-entry',
  templateUrl: './timesheet-entry.component.html',
  styleUrls: ['./timesheet-entry.component.css']
})
export class TimesheetEntryComponent  implements OnInit {
  timesheet = {
    date: '',
    hoursWorked: 0,
    description: '',
  };
  constructor(private api: ApiService) {}

  submitTimesheet() {
    this.api.submitTimesheet(this.timesheet).subscribe(
      (res) => {
        // Handle success
        console.log('Timesheet submitted successfully:', res);
      },
      (error) => {
        // Handle error
        console.log('Timesheet submission failed:', error);
      }
    );
    
  ngOnInit() {
    this.getTimesheets();
  }

  getTimesheets() {
    this.api.getTimesheets().subscribe(
      (res: any) => {
        this.timesheets = res;
      },
      (error) => {
        console.log('Failed to fetch timesheets:', error);
      }
    );
  }

  approveTimesheet(timesheetId: number) {
    this.api.approveTimesheet(timesheetId).subscribe(
      (res) => {
        console.log('Timesheet approved:', res);
        this.getTimesheets();
      },
      (error) => {
        console.log('Failed to approve timesheet:', error);
      }
    );
  }

  rejectTimesheet(timesheetId: number) {
    this.api.rejectTimesheet(timesheetId).subscribe(
      (res) => {
        console.log('Timesheet rejected:', res);
        this.getTimesheets();
      },
      (error) => {
        console.log('Failed to reject timesheet:', error);
      }
    );


    approveTimesheet(timesheetId: number) {
      // Existing code to approve timesheet
  
      // Send email notification
      this.emailService
        .sendEmail(
          'recipient-email@example.com',
          'Timesheet Approved',
          'Your timesheet has been approved.'
        )
        .subscribe(
          (res) => {
            console.log('Email sent:', res);
          },
          (error) => {
            console.error('Failed to send email:', error);
          }
        );
    }
  
    rejectTimesheet(timesheetId: number) {
      // Existing code to reject timesheet
  
      // Send email notification
      this.emailService
        .sendEmail(
          'recipient-email@example.com',
          'Timesheet Rejected',
          'Your timesheet has been rejected.'
        )
        .subscribe(
          (res) => {
            console.log('Email sent:', res);
          },
          (error) => {
            console.error('Failed to send email:', error);
          }
        );
    }
  }
}
    
}

