import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ChildCommunicationService } from '../child-communication.service';
import { ComumnicationService } from '../communication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnDestroy{
  childToParentMessage = '';
  message!: String;
  inputParentMessage!: String;
  stringServParentMsg: string = 'parent using service prop';

  private _unsuscribe$ = new Subject<boolean>();

  constructor(private communicationService: ComumnicationService,
              private childCommunication: ChildCommunicationService
    ) {}

ngOnInit(): void {
  //1*Recibimos la información del servicio para hacer la comunicación parent
//to child  
  this.childCommunication.serviceChildMsg.pipe(takeUntil(this._unsuscribe$)).subscribe(
    (string: string) => this.childToParentMessage = string
  )

//child to parent
this.childCommunication.msgObservableChild$.subscribe((msg) => this.childToParentMessage = msg)
}

 /* ----- INPUT PROP: message parent to child with Input ------ */
  inputParent() {
    this.inputParentMessage = new String('parent using input prop');
  }
/* ----------------------------------------------------------------------------- */
/* ------ SERVICE PROP: message parent to child with Service ------ */
serviceParent(){
  this.communicationService.serviceParentMessage.emit(this.stringServParentMsg);
}
/* ----------------------------------------------------------------------------- */
/* ----- OBSERVABLE PROP: message parent to child with Observable ------- */
observableParent() {
this.communicationService.setMsgParentChild()
}

/* **************************************************************************** */

/* ------- OUTPUT PROP: CHILD TO PARENT ------ */
onReceiveMsg($event: any) {
  this.childToParentMessage = $event;
}

ngOnDestroy(): void {
  this._unsuscribe$.next(true)
  this._unsuscribe$.complete();
}

}