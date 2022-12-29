import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'component-communication';

constructor() {}

/* ----- INPUT PROP: message parent to child with Input ------ /
  inputParentMessage = '';

  inputParent() {
    this.inputParentMessage = 'PARENT USING INPUT PROPERTY';
  }
/*
https://es.stackoverflow.com/questions/421667/c%C3%B3mo-pasar-datos-de-un-componente-a-otro-al-dar-click-a-un-bot%C3%B3n-angular-11-ty
*/
/* ----------------------------------------------------------------------------- /

/* ------ SERVICE PROP: message parent to child with Service ------ /
serviceParentMessage = '';
serviceParent(){
  this.communicationService.getMsg()
  //this.serviceParentMessage = this.communicationService.servMsg;
}
/* ----------------------------------------------------------------------------- /

/* ----- OBSERVABLE PROP: message parent to child with Service ------- /
value: string | Observable<string> = this.communicationService.message;

observableParent() {
  console.log('observable');
/*este código en el child component hace que aparezca el msg nada más entrar a la pagina,
pero lo que queremos es que al darle click nos mande esto al child haciendo 
aparecer el msg en su sitio./
  this.communicationService.message.subscribe(
    msg => this.value = msg 
  )
  //console.log(this.inputService.message);
  }*/
}