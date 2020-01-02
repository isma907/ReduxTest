import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(
    private http: HttpClient
  ) { }


  getData(query) {
    return this.http.get("https://www.googleapis.com/books/v1/volumes", {
      params: {
        q: query
      }
    })
  }
}
