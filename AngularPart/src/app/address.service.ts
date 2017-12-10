import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/Observable/of';
import {Http} from '@angular/http';
import { environment } from '../environments/environment';
import {ElectionResponse} from './electionResponse';
import 'rxjs/add/operator/map';

const GAPI_URL = environment.gapiUrl;

@Injectable()
export class AddressService {


  constructor(private http: Http) { 

  }

  
  getgapi(): Observable<ElectionResponse>{
    return this.http
      .get('https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyCgRdzkXIswZHdeuvYEHSc7T2G0vNGG2zA')
      .map(response => {
        console.log('responce'+response);
        const data = response.json();
        //console.log('JSON'+data)
        //gapi.client.setApiKey('AIzaSyCgRdzkXIswZHdeuvYEHSc7T2G0vNGG2zA');
        return data
      })
      
  }

  getPolling(address:string, id:number): Observable<any>{

    if(address){
      let str = address.split(" ");
      let addr = "";
      for(let i = 0; i < str.length;i++){
        addr+=str[i];
        addr+='%20';
      }
      return this.http
        .get('https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyCgRdzkXIswZHdeuvYEHSc7T2G0vNGG2zA&address='+addr+'&electionId='+id)
        .map(response => {
          console.log('responce'+response);
          const data = response.json();
          return data
        });
      }
  }
  
  

 

}
 