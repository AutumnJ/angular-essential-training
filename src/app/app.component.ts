import { Component } from '@angular/core';
// Components are really just a directive with a view
// The component metadata inherits from the directive metadata
@Component({
  selector: 'mw-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
