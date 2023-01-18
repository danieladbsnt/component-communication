import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ChildCommunicationService } from '../child-communication.service';
import { ComumnicationService } from '../communication.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy {
  @Input() parentToChildMessage = new String('');
  @Output() messgEv = new EventEmitter<string>();

  mensaje = 'child using output prop'
  stringServiceChildMsg: string = 'child using service prop';

  private _unsuscribe$ = new Subject<boolean>();

constructor(private communicationService: ComumnicationService,
            private childCommunication: ChildCommunicationService
) {}

ngOnInit(): void {
  //1*Recibimos la información del servicio para hacer la comunicación child
  //to parent
  //una forma de hacerlo
  // this.communicationService.serviceParentMessage.pipe(takeUntil(this._unsuscribe$)).subscribe(
  //   (stringServParentMsg:string) => this.parentToChildMessage = stringServParentMsg
  // )
  //la misma forma de hacerlo que arriba, pero usando el next que es como se hace en versiones mas actuales
  this.communicationService.serviceParentMessage.pipe(takeUntil(this._unsuscribe$)).subscribe({
    next: (stringServParentMsg:string) => {
    this.parentToChildMessage = stringServParentMsg
    }
  }
  )

  //Observable parent to child
  this.communicationService.msgObservableParent$.subscribe((msg)=> this.parentToChildMessage = msg)
}

/* ******************************************************************************* */
/* CHILD TO PARENT */
/* ------ OUTPUT PROP: CHILD TO PARENT ------- */
outputChild() {
  this.messgEv.emit(this.mensaje)
}
/* ------------------------------------------------------------------------ */
/* ------ 2*SERVICE PROP: CHILD TO PARENT ------- */
serviceChild() {
  this.childCommunication.serviceChildMsg.emit(this.stringServiceChildMsg);
}
/* ------------------------------------------------------------------------ */
/* ------ OBSERVABLE PROP: CHILD TO PARENT ------- */
observableChild() {
  this.childCommunication.setMsgChildParent()
}

ngOnDestroy(): void {
  this._unsuscribe$.next(true)
  this._unsuscribe$.complete();
}
}
