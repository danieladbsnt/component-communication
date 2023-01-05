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
private mss = new BehaviorSubject<string>('CHILD USING OBSERVABLE PROPERTY');

public mensaje = this.mss.asObservable();
}
