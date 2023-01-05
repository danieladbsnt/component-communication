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
  this.communicationService.serviceParentMessage.subscribe(
    (stringServParentMsg:string) => this.serviceParentMessage = stringServParentMsg 
    
  )
}
//INPUT PROP parent to child:
@Input() inputChildMessage = '';




/* ------------------------------------------------------------------------- */
//SERVICE PROP parent to child:
//serviceParentMessage = this.communicationService.getMsg(); 
serviceParentMessage = '';


/* ------------------------------------------------------------------------- */ 
//OBSERVABLE PROP parent to child:
value : string = '';







/* ********************************************************************** */
/* CHILD TO PARENT */
//OUTPUT PROP: CHILD TO PARENT
mensaje = 'CHILD USING OUTPUT EVENT'
@Output() messgEv = new EventEmitter<string>();

outputChild() {
  this.messgEv.emit(this.mensaje)
} 
/* ------------------------------------------------------------------------ */
//SERVICE PROP:
serviceChild() {
  console.log(this.childCommunication.serviceChildMsg);
}
/* ------------------------------------------------------------------------ */
//OBSERVABLE PROP: CHILD TO PARENT
val: string = '';

observableChild() {
  this.childCommunication.mensaje.subscribe(
    mensj => this.val = mensj
  )
  console.log(this.val);
}
}
