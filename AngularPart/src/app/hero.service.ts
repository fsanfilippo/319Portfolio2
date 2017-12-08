import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { environment } from '../environments/environment';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class HeroService {

  constructor(private http: Http) { }

  getHeroes(): Observable<Hero[]>{
    return of(HEROES);
  }
  getUsers(): Observable<string>{
    return this.http
      .get(API_URL + '/users')
      .map(response => {
        const data = response.json();
        return data
      })
      
  }

}
