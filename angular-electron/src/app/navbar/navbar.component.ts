import { Component, OnInit } from "@angular/core";
import { ElectronService } from "app/core/services";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  constructor(private ipcRenderer: ElectronService) {}

  miniMize() {
    this.ipcRenderer.ipcRenderer.send("miniMizeApp", "miniMizeApp");
  }
  maximize() {
    this.ipcRenderer.ipcRenderer.send("maximize", "maximize");
  }
  miniClose() {
    this.ipcRenderer.ipcRenderer.send("miniClose", "miniClose");
  }

  ngOnInit(): void {}
}
