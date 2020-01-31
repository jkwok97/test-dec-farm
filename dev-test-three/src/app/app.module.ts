import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageOneModule } from './page-one/page-one.module'
import { PageTwoModule } from './page-two/page-two.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageOneModule,
    PageTwoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
