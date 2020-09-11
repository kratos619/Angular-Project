import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from "@angular/forms";
import { Observable } from "rxjs";

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
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
        ]),
        email: new FormControl(
          null,
          [Validators.email, Validators.required],
          this.forbiddenEmail.bind(this)
        ),
      }),
      secret: new FormControl(null, Validators.required),
      hobbies: new FormArray([]),
    });
  }
  addHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpFrom.get("hobbies")).push(control);
  }
  ngAfterViewInit() {
    // this.signupForm.value.username = "gaurav";
  }
  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const err_control = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value == "test@test.com") {
          resolve({ email_is_taken: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return err_control;
  }
  onsubmit() {
    console.log(this.signUpFrom);
  }
}
