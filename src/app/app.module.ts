import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';
import { Next1Directive1 } from './next1.directive';
import { Prev1Directive } from './prev1.directive';


@NgModule({
  declarations: [ AppComponent, NextDirective, PrevDirective, Next1Directive1, Prev1Directive,],
  imports: [ BrowserModule, AppRoutingModule, ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
