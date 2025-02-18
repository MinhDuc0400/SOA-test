import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  get(route: string): Observable<any> {
    return this.http.get(route);
  }

  post(route: string, body: any): Observable<any> {
    return this.http.post(route, body);
  }
}
