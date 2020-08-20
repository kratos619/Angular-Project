import { Component, Input, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pm-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {
  @Input() rating : number;
  @Output() sendRating = new EventEmitter<number>();
  starWidth: number ;
  constructor() { }

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick() : void{
    console.log(this.rating);
    this.sendRating.emit(this.rating);
  }
}
