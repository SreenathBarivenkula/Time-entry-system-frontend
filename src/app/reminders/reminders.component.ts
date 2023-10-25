import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-remainders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemaindersComponent {
  reminder = {
    title: '',
    description: '',
    dueDate: '',
  };

  constructor(private api: ApiService) {}

  createReminder() {
    this.api.createReminder(this.reminder).subscribe(
      (res) => {
        // Handle success
        console.log('Reminder created successfully:', res);
      },
      (error) => {
        // Handle error
        console.log('Reminder creation failed:', error);
      }
    );
  }
}

