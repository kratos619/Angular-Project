import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TranslateModule } from "@ngx-translate/core";

import { PageNotFoundComponent } from "./components/";
import { WebviewDirective } from "./directives/";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatSliderModule } from "@angular/material/slider";

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    MatSliderModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  exports: [
    TranslateModule,
    WebviewDirective,
    FormsModule,
    MatSliderModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
})
export class SharedModule {}
