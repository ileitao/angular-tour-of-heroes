import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  /**
   * [of(HEROES) returns an Observable<Hero[]>] that emits a single value.
   * @return {Observable<Hero[]>} [the array of mock heroes]
   */
	getHeroes(): Observable<Hero[]> {
	  return of(HEROES);
	}
}
