import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }
  @ViewChild("form", { static: false }) signupForm: NgForm;

  suggestUserName() {
    this.signupForm.form.patchValue({
      username: "gaurav",
      email: "gaurav@mail.com",
      secret: "pet",
    });
  }
  fields = [
    {
      name: "start",
    },
  ];
  onSubmit(form: NgForm) {
    console.log(form);
  }

  addField() {
    console.log("hi");
    this.fields.push({
      name: "a",
    });
  }

  ngAfterViewInit() {
    // this.signupForm.value.username = "gaurav";
  }
}
