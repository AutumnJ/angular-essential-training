import { Component } from "@angular/core";

// The component decorator takes in a metadata object with some known properties to configure the class you decorate as an Angular component.
// To decorate a component, you need to provide two metadata properties at a minimum: selector and template or template URL.
@Component({
  // pass in an object literal inside the component decorator parentheses
  selector: 'app-root', // selector property is what Angular will use to locate a custom HTML element and apply the component to.
  // The index.html file in the project has a custom HTML element named app-root in it. This selector will target that.
  // Angular will use the template property content to fill the inner HTML of the targeted custom element when it processes it.
  template: '<h1>My App</h1>'
})
export class AppComponent {}
