import { Component} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
title = 'app';
//typeAchteur='personne';
typeAchteur='enterprise';
 transaction:boolean;
 payer(){
 this.transaction=true;
 if(this.transaction){
   document.getElementById('paye').style.background="#838aad";
   document.getElementById('paye').style.border="#838aad";
 }
 }
}
