import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { timeout, catchError, map, delay } from 'rxjs/operators';


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

  deleteMovie(movie): Observable<any> {
    return of(movie).pipe(
      map(da => {
        console.log("ENTRO")
      }),
      delay(2000))
  }


}
