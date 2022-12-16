import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormsModule } from '@angular/forms';// ng model [()] bannan in a box

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'RegistrationForm';
  stateArray:Array<string>=[];
  deptArray:Array<string>=[];

  

  
  
  

  
  

 


  //this method returns all 50 states
  GetAllStates(){
    this.stateArray=["Alabama", "Alaska", "Arizona", "Arkansas", 
    "California",  "Colorado","Connecticut", "Delaware", "Florida",
    "Georigia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", 
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", 
    "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
    "New Jersey", "New Mexico", "New York", "North Carolina", 
    "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", 
    "Rhode Island", "South Carolina", "South Dakota", "Tennessee", 
    "Texas", "Utah", "Vermont", "Virginia", "Washington","West Virginia", 
    "Wisconsin", "Wyoming"];

    return this.stateArray;
  }

  //This method returns all the expiration day months
  GetAllMonths(){
  this.deptArray=["Jan - 1", "Feb - 2", "Mar - 3", "Apr - 4", "May - 5",
  "June - 6", "July - 7", "Aug - 8", "Sept - 9", "Oct - 10", "Nov - 11",
  "Dec - 12"];

  return this.deptArray;
}

//This method returns all the expiration years
GetAllYears(){
  this.deptArray=["2023", "2024", "2025", "2026", "2027", "2028", "2029",
  "2030", "2031"];

  return this.deptArray;
}
}
