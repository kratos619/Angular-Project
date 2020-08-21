import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConvertospacePipe} from './convertospace.pipe';
import {StarRatingComponent} from './star-rating/star-rating.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    ConvertospacePipe,
    StarRatingComponent,
  ],
  imports: [
    CommonModule
  ],
  exports : [
    StarRatingComponent,
    CommonModule,
    FormsModule,
    ConvertospacePipe
  ]
})
export class SharedModule { }
