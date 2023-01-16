import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ChildCommunicationService } from '../child-communication.service';
import { ComumnicationService } from '../communication.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
constructor(private communicationService: ComumnicationService,
            private childCommunication: ChildCommunicationService        
) {
  //1*Recibimos la información del servicio para hacer la comunicación child
  //to parent  
  this.communicationService.serviceParentMessage.subscribe(
    (stringServParentMsg:string) => this.parentToChildMessage = stringServParentMsg 
  )

  //parent to child
  this.communicationService.msgObservableParent$.subscribe((msg)=> this.parentToChildMessage = msg)
}


/* ----- PROP parent to child ------ */
@Input() parentToChildMessage = '';
/* ------------------------------------------------------------------------- */

/* ******************************************************************************* */
/* CHILD TO PARENT */
/* ------ OUTPUT PROP: CHILD TO PARENT ------- */
mensaje = 'child using output prop'
@Output() messgEv = new EventEmitter<string>();
outputChild() {
  this.messgEv.emit(this.mensaje)
} 
/* ------------------------------------------------------------------------ */
/* ------ 2*SERVICE PROP: CHILD TO PARENT ------- */
stringServiceChildMsg: string = 'child using service prop';
serviceChild() {
  this.childCommunication.serviceChildMsg.emit(this.stringServiceChildMsg);
}
/* ------------------------------------------------------------------------ */
/* ------ OBSERVABLE PROP: CHILD TO PARENT ------- */
observableChild() {
  this.childCommunication.setMsgChildParent()
}
}
