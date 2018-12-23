import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/app/component/admin/admin.component';
import { ADMIN_ROUTE } from './admin.routes';
//////////////////////////////////////////////////
import { AuthComponent } from 'src/app/component/auth/auth.component';
import { AUTH_ROUTE } from './auth.routes';
/////////////////////////////////////////////////
const APP_ROUTES: Routes = [
     {path: 'admin', component:AdminComponent, children: ADMIN_ROUTE},
     {path: 'auth', component:AuthComponent ,children:AUTH_ROUTE}
     //Start typing here the import is automatically done is VS CODE
];
export const routing = RouterModule.forRoot(APP_ROUTES);