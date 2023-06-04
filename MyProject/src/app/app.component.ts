import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './timeses/timeses.component.html',
  styleUrls: ['./timeses/timeses.component.css'],
})
export class AppComponent {
  title = 'MyProject';
  count: string='Evening';
  visibi:boolean=true;
  visibi2:boolean=false;
  Days:number =21;
  Hours:number =11;
  Mins:number =34;
  Seck:number =24;

  toggle(){
    this.visibi=!this.visibi;
  }
fu() : void {
  this.count='Morning';
  this.visibi=!this.visibi;
  this.visibi2=!this.visibi2;
}
Notfu() : void {
  this.count='Evening';
  this.visibi=!this.visibi;
  this.visibi2=!this.visibi2;
}
x= setInterval(()=>{
  var futureDate = new Date("March 23, 2023 12:33:01").getTime();
  var today = new Date().getTime();
  var distance= futureDate-today;
  this.Days= Math.floor(distance/(1000 * 60 * 60 *24));
  this.Hours= Math.floor((distance%(1000 * 60 * 60 *24))/ (1000*60*60));
  this.Mins= Math.floor((distance%(1000 * 60 * 60))/ (1000*60));
  this.Seck= Math.floor((distance%(1000 * 60))/ (1000));
},1000)
}
