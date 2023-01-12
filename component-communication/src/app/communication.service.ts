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
msgObservableParent$ = this.observableMessage.asObservable();

  constructor() {}

  //SERVICE PROP:
  serviceParentMessage = new EventEmitter<string>();
}