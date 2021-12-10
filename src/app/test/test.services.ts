import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
private environment =' https://api.nytimes.com/svc/archive/v1/';

  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getData(query,month,year) {
    return this.http.get(this.environment +year+'/'+month+'.json?'+ query , { headers: this.headers });
  }

}
