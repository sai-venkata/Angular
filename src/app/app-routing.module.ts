import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TableDataComponent } from './table-data/table-data.component';

const routes: Routes = [{
  path : "login",
  component : LoginComponent
},
{
  path : "register",
  component : RegisterComponent
},
{
  path: "table",
  component : TableDataComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
