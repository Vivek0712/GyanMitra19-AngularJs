import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/app/component/admin/admin.component';
import { ADMIN_ROUTE } from './admin.routes';
//////////////////////////////////////////////////
import { UserComponent } from 'src/app/component/user/user.component';
import { USER_ROUTE } from './user.routes';
import { AuthGuard } from 'src/app/guard/auth/auth.guard';
import { AdminGuard } from 'src/app/guard/admin/admin.guard';
import { AppComponent } from 'src/app/app.component';
/////////////////////////////////////////////////
const APP_ROUTES: Routes = [

     {path: 'admin', component: AdminComponent, children: ADMIN_ROUTE, canActivate: [AuthGuard,AdminGuard]},
     {path: 'user',component:UserComponent,children:USER_ROUTE}
     //Start typing here the import is automatically done is VS CODE
];
export const routing = RouterModule.forRoot(APP_ROUTES);