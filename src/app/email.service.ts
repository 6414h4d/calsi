import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private apiUrl = 'http://localhost:3000/send-email'; // Your backend endpoint

  constructor(private http: HttpClient) {}

  sendEmail(emailData: { to: string; subject: string; text: string }) {
    return this.http.post(this.apiUrl, emailData);
  }
}