import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/Observable/of';
import {Http} from '@angular/http';
import { environment } from '../environments/environment';

const GAPI_URL = environment.gapiUrl;

@Injectable()
export class AddressService {


  constructor(private http: Http) { 

  }

  getgapi(): Observable<Object>{
    return this.http
      .get(GAPI_URL+'/js/client.js')
      .map(response => {
        const data = response.json();
        return data
      })
      
  }

 

}
 