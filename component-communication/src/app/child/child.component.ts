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
  //Recibimos la información del servicio para hacer la comunicación child
  //to parent  
  this.communicationService.serviceParentMessage.subscribe(
    (stringServParentMsg:string) => this.serviceParentMessage = stringServParentMsg 
  )

  //funciona: aparece el observable desde parent en el component.html, pero queremos que
  //aparezca solo cuando le damos click al btn en parent.
  this.communicationService.messageParent$.subscribe(
    (msg) => this.valor = msg
    
  )
}


/* ----- INPUT PROP parent to child ------ */
@Input() inputChildMessage = '';

/* ------------------------------------------------------------------------- */
/* ------ SERVICE PROP parent to child ------ */ 
serviceParentMessage = '';

/* ------------------------------------------------------------------------- */ 
/* ------ OBSERVABLE PROP parent to child ------- */
valor = '';




/* ******************************************************************************* */
/* CHILD TO PARENT */
/* ------ OUTPUT PROP: CHILD TO PARENT ------- */
mensaje = 'child using output prop'
@Output() messgEv = new EventEmitter<string>();

outputChild() {
  this.messgEv.emit(this.mensaje)
} 

/* ------------------------------------------------------------------------ */
/* ------ SERVICE PROP: CHILD TO PARENT ------- */
stringServiceChildMsg: string = 'child using service prop';

serviceChild() {
  this.childCommunication.serviceChildMsg.emit(this.stringServiceChildMsg);
}

/* ------------------------------------------------------------------------ */
/* ------ OBSERVABLE PROP: CHILD TO PARENT ------- */
val: string = '';

observableChild() {
  this.childCommunication.mensaje.subscribe(
    mensj => this.val = mensj
  )
  console.log(this.val);
}
}
