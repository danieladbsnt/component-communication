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
private mss = new BehaviorSubject<string>('child using observable prop');

public mensajeObservable = this.mss.asObservable();
}
