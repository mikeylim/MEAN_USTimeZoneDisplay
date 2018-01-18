import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  zone:string;
  clear:boolean;
  date:number;
  constructor(){
    this.date;
    this.zone = 'UTC';
  }
  onButtonClick(newZone) {
    if(newZone == "clear") {
      this.zone = "UTC";
      this.date = null;
    } else {
      this.zone = newZone;
      this.date = Date.now();
    }
  }

  // onButtonPSTClick() {
  //   this.zone= "pst";
  //   this.date = Date.now();
  // }
  // onButtonMSTClick() {
  //   this.zone = "mst";
  //   this.date = Date.now();
  // }
  // onButtonCSTClick() {
  //   this.zone = "cst";
  //   this.date = Date.now();
  // }
  // onButtonESTClick() {
  //   this.zone = "est";
  //   this.date = Date.now();
  // }
  // onButtonClearClick() {
  //   this.zone = "clear";
  //   this.date = null;
  // }
}
