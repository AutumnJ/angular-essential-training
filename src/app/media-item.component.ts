import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItem;
  // What we are doing here is exposing an event that can be subscribed to on our custom component, just like native DOM events.
  @Output() delete = new EventEmitter();

  onDelete() {
    console.log('deleted');
    // This method expects to be called with an argument that represents data we can send back.
    // If we didn't have anything to send back for this event, we could pass this emit call null,
    // but it might be helpful to have our delete event return back what was requested to delete.
    this.delete.emit(this.mediaItem);
  }
}
