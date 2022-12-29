import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComumnicationService {
//OBSERVABLE PROP:
private msg = new BehaviorSubject<string>('PARENT USING OBSERVABLE PROPERTY');

public message = this.msg.asObservable();

constructor() {}

//SERVICE PROP:
 //public servMsg = 'PARENT USING SERVICE PROPERTY';
public serviceParentMessage = 'PARENT USING SERVICE PROPERTY';
 getMsg() {
  return this.serviceParentMessage;
 }
}


/*
https://www.youtube.com/watch?v=W1nQXZwXKb0
*/