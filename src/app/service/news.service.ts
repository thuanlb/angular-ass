import { Injectable } from '@angular/core';
import { News } from '../mockup/News';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  api = 'https://5e7ab0880e046300163323dc.mockapi.io/news';
  constructor(
    private http: HttpClient
  ) { }

  getNews():Observable<News[]>{
    return this.http.get<News[]>(this.api);

  }


  detailNews(id: Number): Observable<News>{
    return this.http.get<News>(`${this.api}/${id}`);
  }


  getEditNews(id: Number): Observable<News>{
    return this.http.get<News>(`${this.api}/${id}`);
  }
  updateNews(news): Observable<News>{
    return this.http.put<News>(`${this.api}/${news.id}`, news);
  }


  addNews(news): Observable<News>{
    return this.http.post<News>(`${this.api}`, news);
  }



  deleteNews(id):Observable<News>{
    return this.http.delete<News>(`${this.api}/${id}`);
  }





}
