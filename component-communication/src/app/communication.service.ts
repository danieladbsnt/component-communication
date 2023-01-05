import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComumnicationService {
  //OBSERVABLE PROP:
 public observableMessage: BehaviorSubject<string> = new BehaviorSubject<string>(
    'parent using observable prop'
  );
messageParent$ = this.observableMessage.asObservable();

messageObservableParent() {
  return this.observableMessage.next('parent using observable prop')
}

  constructor() {}

  //SERVICE PROP:
  serviceParentMessage = new EventEmitter<string>();
}

/*
https://www.youtube.com/watch?v=W1nQXZwXKb0
*/
