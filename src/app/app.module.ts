import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
imort { AppComponent } from './app.component';

@NgModule({
  // used to bring in other Angular modules that your module will need
  imports: [
    BrowserModule
  ],
  // used to make components, directives, and pipes available to your module that don't come from another module
  declarations: [
    AppComponent
  ],
  // used for a root module and we'll let Angular know which component or components will be the starting point for the bootstrap process
  bootstrap: [AppComponent]
})

export class AppModule {}
