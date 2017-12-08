import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heroes : Hero[];

  selectedHero: Hero;
  constructor(private heroService: HeroService) {
    this.getHeroes();
    this.testApi();
    
   }
  
  onSelect(hero: Hero): void {
    console.log(this.getCookie('csrf'));
    this.selectedHero = hero;
  }
  
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  testApi(): void {
    this.heroService.getUsers().subscribe(data => console.log(data));
  }

  getCookie(name){
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

  ngOnInit() {

  }

}
