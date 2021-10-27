import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
movies:Movie[]=[];
movieListUpdated=new Subject<Movie[]>();
  constructor() { }

  setMovie(movie:Movie){
    this.movies.push(movie);
    this.movieListUpdated.next(this.getMovies());
  }

  getMovies(){
    return this.movies.slice();
  }
}
