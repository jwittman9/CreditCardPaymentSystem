import {
  Component,
  OnInit
}
from '@angular/core';
import {
  AngularFireDatabase
}
from '@angular/fire/compat/database';
import {
  FormsModule
}
from '@angular/forms'; // ng model [()] bannan in a box

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
  }

) export class SignupComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  title = 'RegistrationForm';
  stateArray: Array < string >= [];
  state1 = "Alabama";
  state2 = "Alaska";
  state3 = "Arizona";
  state4 = "Arkansas";
  state5 = "California";
  state6 = "Colorado";
  state7 = "Connecticut";
  state8 = "Delaware";
  state9 = "Florida";
  state10 = "Georigia";
  state11 = "Hawaii";
  state12 = "Idaho";
  state13 = "Illinois";
  state14 = "Indiana";
  state15 = "Iowa";
  state16 = "Kansas";
  state17 = "Kentucky";
  state18 = "Louisiana";
  state19 = "Maine";
  state20 = "Maryland";
  state22 = "Massachusetts";
  state23 = "Michigan";
  state24 = "Minnesota";
  state25 = "Mississippi";
  state26 = "Missouri";
  state27 = "Montana";
  state28 = "Nebraska";
  state29 = "Nevada";
  state30 = "New Hampshire";
  state31 = "New Jersey";
  state32 = "New Mexico";
  state33 = "New York";
  state34 = "North Carolina";
  state35 = "North Dakota";
  state36 = "Ohio";
  state37 = "Oklahoma";
  state38 = "Oregon";
  state39 = "Pennsylvania";
  state40 = "Rhode Island";
  state41 = "South Carolina";
  state42 = "South Dakota";
  state43 = "Tennessee";
  state44 = "Texas";
  state45 = "Utah";
  state46 = "Vermont";
  state47 = "Virginia";
  state48 = "Washington";
  state49 = "West Virginia";
  state50 = "Wisconsin";
  state21 = "Wyoming";

  deptArray: Array < string >= [];
  month1 = "Jan - 1";
  month2 = "Feb - 2";
  month3 = "Mar - 3";
  month4 = "Apr - 4";
  month5 = "May - 5";
  month6 = "June - 6";
  month7 = "July - 7";
  month8 = "Aug - 8";
  month9 = "Sept - 9";
  month10 = "Oct - 10";
  month11 = "Nov - 11";
  month12 = "Dec - 12";
  year2023 = "2023";
  year2024 = "2024";
  year2025 = "2025";
  year2026 = "2026";
  year2027 = "2027";
  year2028 = "2028";
  year2029 = "2029";
  year2030 = "2030";
  year2031 = "2031";

  //this method returns all 50 states
  GetAllStates() {
    this.stateArray = [];
    this.stateArray.push("Arkansas");
    this.stateArray.push(this.state2);
    this.stateArray.push(this.state3);
    this.stateArray.push(this.state4);
    this.stateArray.push(this.state5);
    this.stateArray.push(this.state6);
    this.stateArray.push(this.state7);
    this.stateArray.push(this.state8);
    this.stateArray.push(this.state9);
    this.stateArray.push(this.state10);
    this.stateArray.push(this.state11);
    this.stateArray.push(this.state12);
    this.stateArray.push(this.state13);
    this.stateArray.push(this.state14);
    this.stateArray.push(this.state15);
    this.stateArray.push(this.state16);
    this.stateArray.push(this.state17);
    this.stateArray.push(this.state18);
    this.stateArray.push(this.state19);
    this.stateArray.push(this.state20);
    this.stateArray.push(this.state22);
    this.stateArray.push(this.state23);
    this.stateArray.push(this.state24);
    this.stateArray.push(this.state25);
    this.stateArray.push(this.state26);
    this.stateArray.push(this.state27);
    this.stateArray.push(this.state28);
    this.stateArray.push(this.state29);
    this.stateArray.push(this.state30);
    this.stateArray.push(this.state31);
    this.stateArray.push(this.state32);
    this.stateArray.push(this.state33);
    this.stateArray.push(this.state34);
    this.stateArray.push(this.state35);
    this.stateArray.push(this.state36);
    this.stateArray.push(this.state37);
    this.stateArray.push(this.state38);
    this.stateArray.push(this.state39);
    this.stateArray.push(this.state40);
    this.stateArray.push(this.state41);
    this.stateArray.push(this.state42);
    this.stateArray.push(this.state43);
    this.stateArray.push(this.state44);
    this.stateArray.push(this.state45);
    this.stateArray.push(this.state46);
    this.stateArray.push(this.state47);
    this.stateArray.push(this.state48);
    this.stateArray.push(this.state49);
    this.stateArray.push(this.state50);
    this.stateArray.push(this.state21);
    return this.stateArray;
  }

  //This method returns all the expiration day months
  GetAllMonths() {
    this.deptArray = [];
    this.deptArray.push(this.month1);
    this.deptArray.push(this.month2);
    this.deptArray.push(this.month3);
    this.deptArray.push(this.month4);
    this.deptArray.push(this.month5);
    this.deptArray.push(this.month6);
    this.deptArray.push(this.month7);
    this.deptArray.push(this.month8);
    this.deptArray.push(this.month9);
    this.deptArray.push(this.month10);
    this.deptArray.push(this.month11);
    this.deptArray.push(this.month12);
    return this.deptArray;
  }

  //This method returns all the expiration years
  GetAllYears() {
    this.deptArray = [];
    this.deptArray.push(this.year2023);
    this.deptArray.push(this.year2024);
    this.deptArray.push(this.year2025);
    this.deptArray.push(this.year2026);
    this.deptArray.push(this.year2027);
    this.deptArray.push(this.year2028);
    this.deptArray.push(this.year2029);
    this.deptArray.push(this.year2030);
    this.deptArray.push(this.year2031);
    return this.deptArray;
  }
}
