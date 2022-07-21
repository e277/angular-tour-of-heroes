import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

import { Hero } from '../../hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  // heroes = HEROES;
  constructor(
    private heroService: HeroService
  ) // private messageService: MessageService
  {}

  ngOnInit(): void {
    this.getHeroes();
  }

  selectedHero?: Hero;
  heroes: Hero[] = [];

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
