import { Component, OnInit } from "@angular/core";
import { ElectronService } from "app/core/services";

@Component({
  selector: "app-menuone",
  templateUrl: "./menuone.component.html",
  styleUrls: ["./menuone.component.scss"],
})
export class MenuoneComponent implements OnInit {
  constructor(private _electronServices: ElectronService) {}

  ngOnInit(): void {}
  takeScrenShot() {
    this._electronServices.takeScreenShot();
  }
}
