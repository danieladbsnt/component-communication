import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ChildCommunicationService } from '../child-communication.service';
import { ComumnicationService } from '../communication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  constructor(private communicationService: ComumnicationService,
              private childCommunication: ChildCommunicationService
    ) { 
    //Recibimos la información del servicio para hacer la comunicación parent
    //to child  
      this.childCommunication.serviceChildMsg.subscribe(
        (string: string) => this.serviceChildMessage = string
      )
    }



 /* ----- INPUT PROP: message parent to child with Input ------ */
  inputParentMessage = '';

  inputParent() {
    this.inputParentMessage = 'parent using input prop';
  }




/* ----------------------------------------------------------------------------- */
/* ------ SERVICE PROP: message parent to child with Service ------ */
stringServParentMsg: string = 'parent using service prop';

serviceParent(){
  this.communicationService.serviceParentMessage.emit(this.stringServParentMsg);
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
/* CHILD TO PARENT */

/* ------- OUTPUT PROP: CHILD TO PARENT ------ */
messg:string = '';

onReceiveMsg($event: any) {
  this.messg = $event;
}


/* ------------------------------------------------------------------------ */
/* ------- SERVICE PROP: CHILD TO PARENT ------ */
serviceChildMessage = '';


}
