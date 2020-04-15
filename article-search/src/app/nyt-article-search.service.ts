import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as moment from "moment";

@Injectable({
  providedIn: 'root',
})
export class NytArticleSearchService {
  constructor(private http: HttpClient) {}
  
  getArticles(section: string) {
    let params: HttpParams = new HttpParams();
    params = params.set('api-key', environment.apiKey);
    return this.http.get(
      `${environment.apiUrl}/topstories/v2/${section}.json`,
      { params }
    );
  }

  search(data) {
    let params: HttpParams = new HttpParams();
    params = params.set('api-key', environment.apiKey);
    if (data.keyword !== undefined) {
      params = params.set('q', data.keyword);
    }
    debugger
    return this.http.get(`${environment.apiUrl}/search/v2/articlesearch.json`, { params });
  }
}
