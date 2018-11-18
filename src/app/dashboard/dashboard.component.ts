import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
	/**
	 * Defines a heroes array property
	 * @type {Hero[]}
	 */
  heroes: Hero[] = [];
 
  /**
   * Inject the HeroService into a private heroService property
   * @param {HeroService} private heroService injectable property
   */
  constructor(private heroService: HeroService) { }
 
  /**
   * ngOnInit() lifecycle hook calls getHeroes
   */
  ngOnInit() {
    this.getHeroes();
  }
 
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}