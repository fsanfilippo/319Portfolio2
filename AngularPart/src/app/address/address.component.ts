import { Component, OnInit } from '@angular/core';
import {AddressService} from '../address.service';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  value : Object;
  gapi : Object;
  
  constructor(private addressService: AddressService) { 


  }

  ngOnInit() {
    console.log(this.addressService.getgapi().subscribe(data => console.log(data)));
  }

  getgapi(){
    
  }


}
