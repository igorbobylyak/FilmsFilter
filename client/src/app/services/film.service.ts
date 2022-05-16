import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../interfaces/film.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private readonly http: HttpClient) { }

  getFilms(filter: string): Observable<Film[]> {
    return this.http.get<Film[]>(`/api/films?filter=${filter}`);
  }
}
