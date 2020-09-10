import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  suggestUserName() {
    const suggestedName = "Superuser";
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
}
