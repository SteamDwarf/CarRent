import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PartialContactData } from './app.types';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  sendQuery(data: PartialContactData) {
    return this.http.post('https://testologia.site/intensive-price', data);
  }

  getQuery(category: string) {
    return this.http.get('https://testologia.site/intensive-data', {params: {category: category}});
  }
}
