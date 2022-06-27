import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { Visita } from '../models/visita.model';

const baseURL = "http://localhost:8090/rest/visita";

@Injectable({
  providedIn: 'root'
})
export class VisitaService {
  date = new Date();
  constructor(private http:HttpClient) { }

  getDate() {
    return timer(1000, 1000).pipe(map((_) => this.getDateTime()));
  }

  // get new time by adding + sec
  private getDateTime() {
    this.date.setSeconds(this.date.getSeconds() + 1);
    return (
      this.date.getHours() +
      ':' +
      this.date.getMinutes() +
      ':' +
      this.date.getSeconds()
    );
  }
  instertarVisita(data:Visita):Observable<any>{
    return this.http.post(baseURL,data);
  }
}