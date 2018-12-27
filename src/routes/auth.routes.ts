import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/component/auth/login/login.component';
import { RegisterComponent } from 'src/app/component/auth/register/register.component';
import { RegisterVerifyComponent } from 'src/app/component/auth/register/register_verify/register_verify.component';




export const AUTH_ROUTE: Routes = [
     { path: 'login', component: LoginComponent },
     { path: 'register', component: RegisterComponent },
     {path: 'activate',component:RegisterVerifyComponent}
];
