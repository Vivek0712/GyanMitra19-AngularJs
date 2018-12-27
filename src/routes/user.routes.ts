import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/component/admin/home/home.component';
import { AboutComponent } from 'src/app/component/user/about/about.component';



export const USER_ROUTE: Routes = [
     { path: 'home', component: HomeComponent },
     { path: 'About', component: AboutComponent }
];