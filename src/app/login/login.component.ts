import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  @Input() userArray: Array<any> = [];
  loginSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      loginEmail: ['', [Validators.required, Validators.email]],
      loginPassword: ['', Validators.required],
    });
  }

  get fl() {
    return this.loginForm.controls;
  }

  onSubmitLogin() {
    console.log('came here to onsubmit login password', this.loginForm);
    this.loginSubmitted = true;
    let counter = 0;
    // stop here if form is invalid
    let email = this.loginForm.controls.loginEmail.value;
    let password = this.loginForm.controls.loginPassword.value;
    console.log(password);
    this.userArray.forEach((element, idx) => {
      if (element.email === email) {
        if (element.password == password) {
          counter += 1;
          alert('logged in');
        } else {
          alert('wrong password');
          return;
        }
      }

      if (idx === this.userArray.length - 1 && counter === 0) {
        alert('invalid credentials');
      }
    });

    if (this.loginForm.invalid) {
      return;
    }
  }
}
