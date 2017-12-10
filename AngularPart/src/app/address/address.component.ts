import { Component, OnInit } from '@angular/core';
import {AddressService} from '../address.service';
import {Election} from '../election';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  value : Object;
  elections: Election[];
  voterInfo: any;
  selectedElection: Election;
  address: string;
  pollingLocations: string[];
  pollingLocationsTimes: string[];
  pollingLocationsNotes: string[];
  confirmAddress: boolean = false;
  normalizedAddress: string;
  setAddress: boolean = false;

  
  constructor(private addressService: AddressService) { 
    
  }

  ngOnInit() {
    this.elections = new Array<Election>();
    this.addressService.getgapi().subscribe(data => {
      let elections = data.elections;
      data.elections.map(elem => {
        this.elections.push(elem);
      });
      console.log(this.elections);
    });
   
  }


  getgapi(){
    this.addressService.getgapi().subscribe(data => this.value = data);
  }

  onSelect(election: Election): void {
    if(!this.address){
      this.setAddress = true;
      return;
    }
    
    
    console.log(election.id);

    this.addressService.getPolling(this.address, election.id).subscribe(data => {
     
      this.voterInfo = data;
      console.log(this.voterInfo);
      this.selectedElection = election;
    });

  }

  getCorrectAddress(){
    this.addressService.getPolling(this.address, 2000).subscribe(data => {
      this.confirmAddress = true;
      let input = data.normalizedInput;
      this.normalizedAddress = input.line1 + ' ' + input.city + ', ' + input.state + ' ' + input.zip;

    });

    
  }




}
