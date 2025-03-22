import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { UserStorageService } from '../../basic/services/storage/user-storage.service';
const BASIC_URL = "http://localhost:8082/";
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(private http: HttpClient) { }

  getAllAds(): Observable<any> {
     return this.http.get(BASIC_URL + `api/client/ads`, {
      headers: this.createAuthorizationHeader()
    });
  }
  searchAdByName(name: any): Observable<any> {
     return this.http.get(BASIC_URL + `api/client/search/${name}`, {
      headers: this.createAuthorizationHeader()
    });
  }
  getAdDetailsByAdId(adId: any): Observable<any> {
     return this.http.get(BASIC_URL + `api/client/ad/${adId}`, {
      headers: this.createAuthorizationHeader()
    });
  }
  bookService(bookDTO: any): Observable<any> {
      return this.http.post(BASIC_URL + `api/client/book-service`, bookDTO, {
      headers: this.createAuthorizationHeader()
    });
  }
  getMyBookings(): Observable<any> {
    const userId = UserStorageService.getUserId();
    return this.http.get(BASIC_URL + `api/client/my-bookings/${userId}`, {  
      headers: this.createAuthorizationHeader()
    });
  }
  giveReview(reviewDTO: any): Observable<any> {
    return this.http.post(BASIC_URL + `api/client/review`, reviewDTO, {
      headers: this.createAuthorizationHeader()
    });
  }
  createServiceRequest(serviceRequestDto: any): Observable<any> {
    return this.http.post(BASIC_URL + 'api/client/service-request', serviceRequestDto, {
      headers: this.createAuthorizationHeader(),
      responseType: 'text'
    });
  }  
  submitInquiry(inquiryData: any): Observable<any> {
    console.log("Sending inquiry:", inquiryData);
    return this.http.post(`${BASIC_URL}api/client/inquiry`, inquiryData, {  // ✅ API endpoint now matches backend
      headers: this.createAuthorizationHeader(),
      responseType: 'text'
    }).pipe(
      catchError(error => {
        console.error("Error submitting inquiry:", error);
        return throwError(() => new Error("Failed to submit inquiry. Please try again."));
      })
    );
  }
  getAllInquiriesByUser(userId: any): Observable<any> {
    return this.http.get(`${BASIC_URL}api/client/inquiries/${userId}`, {
      headers: this.createAuthorizationHeader()
    }).pipe(
      catchError(error => {
        console.error("Error fetching inquiries:", error);
        return throwError(() => new Error("Failed to retrieve inquiries. Please try again."));
      })
    );
  }
  respondToInquiry(inquiryId: number, response: string): Observable<any> {
    return this.http.put(`${BASIC_URL}api/client/inquiry/${inquiryId}/respond`, response, {
      headers: this.createAuthorizationHeader(),
      responseType: 'text'
    }).pipe(
      catchError(error => {
        console.error("Error responding to inquiry:", error);
        return throwError(() => new Error("Failed to submit response. Please try again."));
      })
    );
  }
  createAuthorizationHeader(): HttpHeaders {
    const token = UserStorageService.getToken(); 
    let authHeaders: HttpHeaders = new HttpHeaders();
    if (token) {
      authHeaders = authHeaders.set('Authorization', 'Bearer ' + token);
    }
    return authHeaders;
  }
}
