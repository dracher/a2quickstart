import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import {HeroDetailComponent} from './hero-detail.component'
import { HeroService } from './hero.service';
import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],
  directives: [HeroDetailComponent],
  // providers: [HeroService]
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService,
    private router: Router) { }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail() {
    this.router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
  }
}
