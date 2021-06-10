import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user: any;
  registerForm: any;
  loginForm: any;
  userArray: Array<any> = [];
  registerSubmitted: boolean = false;
  @Output() newItemEvent = new EventEmitter<object>();
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmitRegister() {
    this.registerSubmitted = true;
    console.log(this.registerForm);

    let email = this.registerForm.controls.email.value;
    let password = this.registerForm.controls.password.value;
    let name = this.registerForm.controls.name.value;
    this.user = {
      name: name,
      email: email,
      password: password,
    };
    this.userArray.push(this.user);
    console.log(this.userArray);

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
  }

  get fg() {
    return this.registerForm.controls;
  }
}
