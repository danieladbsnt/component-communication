import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ComumnicationService } from '../communication.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
//INPUT PROP
@Input() inputChildMessage = '';

//OBSERVABLE PROP:
value : string = 'aaa';

constructor(private communicationService: ComumnicationService) {
//this.inputService.message.subscribe(msg => this.value = msg)
//si lo dejo sin comentar aparece el message nada más iniciarlizarse la app, y 
//lo que queremos es que aparezca cuando le damos click al
}

}
