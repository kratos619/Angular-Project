import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./reactiveform.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }
  ngAfterViewInit() {
    // this.signupForm.value.username = "gaurav";
  }
}
