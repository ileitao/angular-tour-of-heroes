import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero }           from './hero';
import { HEROES }         from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  /**
   * of(HEROES) returns an Observable<Hero[]>] that emits a single value.
   * @return {Observable<Hero[]>} the array of mock heroes
   */
	getHeroes(): Observable<Hero[]> {
	  // TODO: send the message _after_ fetching the heroes
	  this.messageService.add('HeroService: fetched heroes');
	  return of(HEROES);
	}

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    // the backticks (`) that define a JavaScript template literal for embedding the id
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
