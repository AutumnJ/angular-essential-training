import { Component, Input } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  // This will tell Angular that we want it to support any property bindings placed on instances of the mw-media-item elements where the property name is mediaItem.
  // Even though Angular supports this name alias, it is a recommended practice to avoid using that approach by default.
  @Input('mediaItemToWatch') mediaItem;

  onDelete() {
    console.log('deleted');
  }
}
