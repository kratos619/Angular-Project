import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./reactiveform.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, AfterViewInit {
  signUpFrom: FormGroup;
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    this.signUpFrom = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      secret: new FormControl(null, Validators.required),
    });
  }
  ngAfterViewInit() {
    // this.signupForm.value.username = "gaurav";
  }
  onsubmit() {
    console.log(this.signUpFrom);
  }
}
