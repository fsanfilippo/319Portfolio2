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
    this.selectedElection = election;
    console.log(election.id);
    
    this.addressService.getPolling(this.address, election.id).subscribe(data => {
     
      this.voterInfo = data;
      console.log(this.voterInfo);
      console.log(this.voterInfo.election);

      if(this.voterInfo['pollingLocations']){
        this.pollingLocations = new Array<string>();
        console.log(this.voterInfo.pollingLoactions);
        for(let i = 0; i < this.voterInfo['pollingLocations'].length;i++){
          this.pollingLocations.push("Polling Location Address: "+
            this.voterInfo.pollingLocations[i+""].address.locationName+" "
            +this.voterInfo.pollingLocations[i+""].address.line1+" "
            +this.voterInfo.pollingLocations[i+""].address.city+" "
            +this.voterInfo.pollingLocations[i+""].address.state+" "
            +this.voterInfo.pollingLocations[i+""].address.zip
          );
          this.pollingLocations.push("Polling Location Hours: "+this.voterInfo.pollingLocations[i+""].pollingHours);
          this.pollingLocations.push("Polling Location Notes: "+this.voterInfo.pollingLocations[i+""].pollingHours);
        }
      }else{
        this.pollingLocations = new Array<string>();
        console.log("No Polling Locations");
        this.pollingLocations.push("No Polling Locations");
      }
    });

  }

  onClick(){
    console.log(this.address);

    
  }




}
