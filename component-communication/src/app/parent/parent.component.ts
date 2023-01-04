import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ComumnicationService } from '../communication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  constructor(private communicationService: ComumnicationService) { }



 /* ----- INPUT PROP: message parent to child with Input ------ */
  inputParentMessage = '';

  inputParent() {
    this.inputParentMessage = 'PARENT USING INPUT PROPERTY';
  }




/* ----------------------------------------------------------------------------- */
/* ------ SERVICE PROP: message parent to child with Service ------ */
serviceParent(){
  // console.log(this.communicationService.getMsg());
  // return this.communicationService.getMsg();

}




/* ----------------------------------------------------------------------------- */
/* ----- OBSERVABLE PROP: message parent to child with Service ------- */
value: string = '';

observableParent() {
  this.communicationService.message.subscribe(
    msg => this.value = msg
  )
  console.log(this.value);
}




/* **************************************************************************** */
/* CHILD TO PARENT*/
//mensaje = '';
messg:string = '';

onReceiveMsg($event: any) {
  this.messg = $event;
}
}
