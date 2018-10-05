import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbPaginationModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
