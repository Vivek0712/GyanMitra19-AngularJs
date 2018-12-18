import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/component/admin/home/home.component';
import { CollegeComponent } from 'src/app/component/admin/college/college.component';



export const ADMIN_ROUTE: Routes = [
     {path: 'home', component:HomeComponent },
     {path: 'college', component:CollegeComponent}
];
