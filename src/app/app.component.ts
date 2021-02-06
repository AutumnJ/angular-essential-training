import { Component } from '@angular/core';

@Component({
  // The W3C spec states that custom Dom elements should use at least one dash in their names.
  // Recommendation is that selectors get prefixed for your app or feature.
  selector: 'mw-app', // app-root => mw-app
  template: '<h1>My App</h1>'
})
export class AppComponent {}
