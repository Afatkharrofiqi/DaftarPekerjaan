import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieapiService {

  private baseUrl: string = "https://api.myjson.com/bins/1eluj2";

  constructor(
    private readonly http: HttpClient,
    private readonly platform: Platform) { }

  getMovies(): Observable<any>{
    return this.http.get(this.baseUrl);
  }  
}
