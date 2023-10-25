import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private BASE_URL = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}

  sendEmail(to: string, subject: string, text: string) {
    const emailData = { to, subject, text };
    return this.http.post(`${this.BASE_URL}/emails`, emailData);
  }
}