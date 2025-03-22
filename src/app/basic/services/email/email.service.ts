import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  BASIC_URL = "http://localhost:8082/api/email/send";

  constructor(private http: HttpClient) {}

  sendEmail(to: string, subject: string, text: string): Observable<any> {
    const emailData = { to, subject, text };
    return this.http.post<any>(this.BASIC_URL, emailData);
  }
}
