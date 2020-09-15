import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormArray,
} from '@angular/forms';

import { Customer } from './customer';
function emailMatcher(c: AbstractControl) {
  const emailControl = c.get('email');
  const confirmemailControl = c.get('confirmemail');

  if (emailControl.pristine || confirmemailControl.pristine) {
    return null;
  }
  if (emailControl.value === confirmemailControl.value) {
    return null;
  }

  return { match: true };
}
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit, AfterViewInit {
  customer = new Customer();
  customerForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group(
        {
          email: ['', [Validators.required, Validators.email]],
          confirmemail: ['', [Validators.required, Validators.email]],
        },
        { validators: emailMatcher }
      ),
      phone: ['', [Validators.required]],
      notification: ['email'],
      sendCatalog: [true],
      addressFormGroup: this.fb.array([this.builAddress()]),
    });
  }

  get addressFormGroup(): FormArray {
    return <FormArray>this.customerForm.get('addressFormGroup');
  }
  addAddressFormGroup() {
    this.addressFormGroup.push(this.builAddress());
  }
  builAddress(): FormGroup {
    return this.fb.group({
      addressType: '',
      street1: '',
      street2: '',
      city: '',
      state: '',
      zip: '',
    });
  }
  setNotificaion(notifyVia: string) {
    const phoneControl = this.customerForm.get('phone');
    if (notifyVia === 'text') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
    // console.log(event);
  }
  ngAfterViewInit() {
    // this.customerForm.setValue({
    //   firstName: 'gairav',
    //   lastName: 'pal',
    //   email: 'gaurav.pal@gmail.com',
    //   sendCatalog: true,
    // });
  }
  save(): void {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm));
  }
}
