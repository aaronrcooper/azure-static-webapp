import { FunctionsApi } from './functions.api';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FunctionMessageComponent } from './function-message/function-message.component';

@NgModule({
  declarations: [AppComponent, FunctionMessageComponent],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
