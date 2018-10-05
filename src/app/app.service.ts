import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  searchArticles(keywords: string[], page: number) : Observable<{}> {
        var url = 'https://content.guardianapis.com/search?api-key=1f746698-3754-44c3-93ba-1b563c8bf894&page=' + page;

        if(keywords !== null && keywords.length>0){
            url += '&q=';
            for(let word of keywords){
                url += word + ' AND ';
            }
            url = url.slice(0,-5);
        }

        return this.http.get(url);
    }
}
