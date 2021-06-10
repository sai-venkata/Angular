import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user: any;
  registerForm: any;
  loginForm: any;
  userArray: Array<any> = [];
  registerSubmitted: boolean = false;
  loginSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    // let registerForm: FormGroup;
    // let submitted: boolean = false;
  }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4)]],
    });
    this.loginForm = this.formBuilder.group({
      loginEmail: ['', [Validators.required, Validators.email]],
      loginPassword: ['', Validators.required],
    });
    console.log("login form invalid " , this.loginForm.invalid);
    console.log("login form invalid " , this.loginForm);
  }

  get fg() {
    return this.registerForm.controls;
  }
  get fl() {
    return this.loginForm.controls;
  }

  
  onSubmitLogin() {
    console.log(
      'came here to onsubmit login password',
      this.loginForm
    );
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

  // let user: object;
  // let userArray: Array<any> = [];
  // let counter : number = 0;
  // let formRegister = document.getElementById('form-register') as HTMLFormElement;

  // formRegister.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   let email = document.getElementById('email') as HTMLInputElement;
  //   let password = document.getElementById('password') as HTMLInputElement;
  //   let name = document.getElementById('name') as HTMLInputElement;
  //   user = {
  //     name: name.value,
  //     email: email.value,
  //     password: password.value,
  //   };
  //   userArray.push(user);
  //   console.log(userArray);
  // });

  // let formLogin = document.getElementById('form-login') as HTMLFormElement;

  // formLogin.addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   let email = document.getElementById('email-login') as HTMLInputElement;
  //   let password = document.getElementById(
  //     'password-login'
  //   ) as HTMLInputElement;

  //   userArray.forEach((element,idx) =>{
  //     if(element.email === email.value){
  //       if (element.password === password.value) {
  //            counter += 1
  //            alert("logged in")
  //       }
  //       else{
  //         alert("wrong password")
  //         return;
  //       }
  //     }

  //     if(idx === userArray.length-1 && counter === 0){
  //         alert('invalid credentials');
  //     }

  //   })

  // });

}
