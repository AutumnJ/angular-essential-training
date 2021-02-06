import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: './app.component.html',
  // could also break h1 and .description into two separate sections, since this takes an array
  // styles: [`
  //   h1 { color: #fff; }
  //   .description {
  //     font-style: italic;
  //     color: green;
  //   }
  // `],
  // style URLs property works with string values that point to a file that contains the style content
  // takes an array of strings

  // Angular is actually shimming the style content and converting it into new selectors.
  // Then injecting it into the DOM in the head tag.
  // If we look at the source of the web app and the browser we can see that we have a style tag in our head element.
  // Takeaway: angular provides a way to scope the CSS you write to the component you are writing it for
  // without you needing to do anything extra in your CSS or in some build process.
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
