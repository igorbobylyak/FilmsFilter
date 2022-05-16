import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';
import { Film } from '../../interfaces/film.interface';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  films: Film[];

  constructor(private readonly filmService: FilmService) { }

  ngOnInit(): void {
    this.setFilms('');
  }

  filterFilms(search: string) {
    this.setFilms(search);
  }

  setFilms(searchQuery: string) {
    this.filmService.getFilms(searchQuery).subscribe((films: Film[]) => {
      this.films = films;
    })
  }

}
