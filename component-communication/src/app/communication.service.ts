import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComumnicationService {
  //OBSERVABLE PROP:
 public observableMessage: BehaviorSubject<string> = new BehaviorSubject<string>('');
msgObservableParent$ = this.observableMessage.asObservable();

setMsgParentChild() {
  this.observableMessage.next('parent using observable prop')
}
  constructor() {}

  //SERVICE PROP:
  serviceParentMessage = new EventEmitter<string>();
}