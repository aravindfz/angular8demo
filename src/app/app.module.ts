import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResolveTesterComponent } from './resolve-tester/resolve-tester.component';
import { Resolver } from './resolve-tester/resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    ResolveTesterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Resolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
