import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-holiday-calendar',
  templateUrl: './holiday-calendar.component.html',
  styleUrls: ['./holiday-calendar.component.css']
})
export class HolidayCalendarComponent {
  holidays = [];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getHolidays().subscribe(
      (res: any) => {
        this.holidays = res;
      },
      (error) => {
        console.log('Failed to fetch holidays:', error);
      }
    );
  }
}
