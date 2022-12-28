import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComumnicationService {
//OBSERVABLE PROP:
private msg = new BehaviorSubject<string>('PARENT USING SERVICE PROPERTY');

public message = this.msg.asObservable();

constructor() {
  console.log(this.msg);
 }

}


/*
https://www.youtube.com/watch?v=W1nQXZwXKb0
*/