import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/component/admin/home/home.component';
import { CollegeComponent } from 'src/app/component/admin/college/college.component';
import { CategoryComponent } from '../app/component/admin/category/category.component';
import { DegreeComponent } from '../app/component/admin/degree/degree.component';
import { DepartmentComponent } from '../app/component/admin/department/department.component';
import { AdminEventComponent } from '../app/component/admin/admin-event/admin-event.component';



export const ADMIN_ROUTE: Routes = [
     {path: 'home', component:HomeComponent },
     {path: 'college', component:CollegeComponent},
     {path: 'category', component:CategoryComponent},
     {path: 'degree', component:DegreeComponent},
     {path: 'department',component:DepartmentComponent},
     {path: 'events', component:AdminEventComponent}
];
