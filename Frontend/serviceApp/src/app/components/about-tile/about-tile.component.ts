import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-about-tile',
  templateUrl: './about-tile.component.html',
  styleUrls: ['./about-tile.component.scss']
})
export class AboutTileComponent implements OnInit {
  titleValue: string;
  imagePath: string;
  descriptionValue: string;
  @Input('title')
  set title(value: string) {
    this.titleValue = value;
  }
  @Input('description')
  set description(value: string) {
    this.descriptionValue = value;
  }
  @Input('tileImage')
  set tileImage(value: string) {
    this.imagePath = value;
  }

  @Output() book: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  bookNow() {
    this.book.emit(this.titleValue);
  }

}
