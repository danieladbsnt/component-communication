import { Component } from '@angular/core';
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
    //1*Recibimos la información del servicio para hacer la comunicación parent
    //to child  
      this.childCommunication.serviceChildMsg.subscribe(
        (string: string) => this.childToParentMessage = string
      )


    //child to parent
    this.childCommunication.msgObservableChild$.subscribe((msg) => this.childToParentMessage = msg)
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
/* ----- OBSERVABLE PROP: message parent to child with Observable ------- */
observableParent() {
this.communicationService.setMsgParentChild()
}

/* **************************************************************************** */
/* CHILD TO PARENT */

/* ------- OUTPUT PROP: CHILD TO PARENT ------ */
onReceiveMsg($event: any) {
  this.childToParentMessage = $event;
}
/* ------------------------------------------------------------------------ */
/* ------- 1* PROP: CHILD TO PARENT ------ */
childToParentMessage = '';

}