import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildCommunicationService {

  constructor() { }
/* CHILD TO PARENT */
//SERVICE PROP:
serviceChildMsg = new EventEmitter<string>();




/*-----------------------------------------------------------------------------*/
//OBSERVABLE
public observableMsg: BehaviorSubject<string> = new BehaviorSubject<string>('');
msgObservableChild$ = this.observableMsg.asObservable();

setMsgChildParent() {
  this.observableMsg.next('child using observable prop')
}


}
