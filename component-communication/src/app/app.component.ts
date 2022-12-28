import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ComumnicationService } from './communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-communication';

/* ----- INPUT PROP: message parent to child with Input ------ */
  inputParentMessage = '';
  newInputMssg = 'PARENT USING INPUT PROPERTY';

  inputParent() {
    this.inputParentMessage = this.newInputMssg;
  }
/*
https://es.stackoverflow.com/questions/421667/c%C3%B3mo-pasar-datos-de-un-componente-a-otro-al-dar-click-a-un-bot%C3%B3n-angular-11-ty
*/
/* ----------------------------------------------------------------------------- */

/* ------ SERVICE PROP: message parent to child with Service ------ */
// value: string = '';
serviceParent(){
  console.log('service');
  
}
/* ----------------------------------------------------------------------------- */

/* ----- OBSERVABLE PROP: message parent to child with Service ------- */
value: string | Observable<string> = this.communicationService.message;
constructor(private communicationService: ComumnicationService) {}

observableParent() {
  console.log('observable');
  
  this.communicationService.message.subscribe(
    msg => this.value = msg 
  )
  //console.log(this.inputService.message);
  }
}