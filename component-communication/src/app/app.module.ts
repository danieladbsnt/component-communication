import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ComumnicationService } from './communication.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ComumnicationService
  ],
  bootstrap: [AppComponent],
  exports: [ChildComponent]
})
export class AppModule { }
