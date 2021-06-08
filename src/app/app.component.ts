import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  ngOnInit(): void {
    let user: object;
    let userArray: Array<any> = [];
    let counter : number = 0;
    let formRegister = document.getElementById('form-register') as HTMLFormElement;

    formRegister.addEventListener('submit', (e) => {
      e.preventDefault();
      let email = document.getElementById('email') as HTMLInputElement;
      let password = document.getElementById('password') as HTMLInputElement;
      let name = document.getElementById('name') as HTMLInputElement;
      user = {
        name: name.value,
        email: email.value,
        password: password.value,
      };
      userArray.push(user);
      console.log(userArray);
    });


    let formLogin = document.getElementById('form-login') as HTMLFormElement;

    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();
      let email = document.getElementById('email-login') as HTMLInputElement;
      let password = document.getElementById(
        'password-login'
      ) as HTMLInputElement;

      userArray.forEach((element,idx) =>{
        if(element.email === email.value){
          if (element.password === password.value) {
               counter += 1 
               alert("logged in")      
          }
          else{
            alert("wrong password")
            return;
          }
        }

        if(idx === userArray.length-1 && counter === 0){
            alert('invalid credentials');
        }

      })
      
    });
  }
}
