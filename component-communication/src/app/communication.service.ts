import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComumnicationService {
//OBSERVABLE PROP:
private msg = new BehaviorSubject<string>('PARENT USING OBSERVABLE PROPERTY');

public message = this.msg.asObservable();

constructor() {}

//SERVICE PROP:
serviceParentMessage = new EventEmitter<string>();

}

/*
https://www.youtube.com/watch?v=W1nQXZwXKb0
*/