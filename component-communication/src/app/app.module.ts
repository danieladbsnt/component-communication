import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ComumnicationService } from './communication.service';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [
    ComumnicationService
  ],
  bootstrap: [AppComponent],
  exports: [ChildComponent]
})
export class AppModule { }
