import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } 					from '@angular/router';
import { Location } 								from '@angular/common';
import { HeroService }  						from '../hero.service';
import { Hero } 										from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

	@Input() hero: Hero;
	
	/**
	 * HeroDetailComponent constructor
	 * @param {ActivatedRoute} private route       holds information about the route to this instance of the HeroDetailComponent
	 * @param {HeroService}    private heroService gets hero data from the remote server and this component will use it to get the hero-to-display
	 * @param {Location}       private location    an Angular service for interacting with the browser. You'll use it later to navigate back to the view that navigated here.
	 */
  constructor(
	  private route: ActivatedRoute,
	  private heroService: HeroService,
	  private location: Location
	) {}

  ngOnInit() {
  	this.getHero();
  }

  getHero(): void {
  	// route.snapshot a static image of the route information shortly after the component was created
  	// paramMap is a dictionary of route parameter values extracted from the URL
  	// (+) operator converts the string to a number
  	const id = +this.route.snapshot.paramMap.get('id');
  	this.heroService.getHero(id)
  		.subscribe(hero => this.hero = hero);
  }

  goBack(): void {
	  this.location.back();
	}

}
