import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  login(user) {
    return this.http.post(`${this.BASE_URL}/user/login`, user);
  }
    
  submitTimesheet(timesheet) {
      return this.http.post(`${this.BASE_URL}/timesheets`, timesheet);
  }                     
  applyForLeave(leaveApplication) {
        return this.http.post(`${this.BASE_URL}/leave-applications`, leaveApplication);
      
  }

  getHolidays() {
    return this.http.get(`${this.BASE_URL}/holidays`);
  }

  getTimesheets() {
    return this.http.get(`${this.BASE_URL}/timesheets`);
  }

  approveTimesheet(timesheetId) {
    return this.http.put(`${this.BASE_URL}/timesheets/workflow/${timesheetId}/approve`, null);
  }

  rejectTimesheet(timesheetId) {
    return this.http.put(`${this.BASE_URL}/timesheets/workflow/${timesheetId}/reject`, null);
  }

  createReminder(reminder) {
    return this.http.post(`${this.BASE_URL}/reminders`, reminder);
  }

}
