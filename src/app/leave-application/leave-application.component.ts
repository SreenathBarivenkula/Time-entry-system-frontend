import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.css']
})
export class LeaveApplicationComponent {
  leaveApplication = {
    startDate: '',
    endDate: '',
    reason: '',
  };

  constructor(private api: ApiService) {}

  applyForLeave() {
    this.api.applyForLeave(this.leaveApplication).subscribe(
      (res) => {
        // Handle success
        console.log('Leave application submitted successfully:', res);
      },
      (error) => {
        // Handle error
        console.log('Leave application submission failed:', error);
      }
    );
  }
}
