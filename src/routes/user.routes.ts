import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/component/admin/home/home.component';
import { AboutComponent } from 'src/app/component/user/about/about.component';
import { EventsComponent } from 'src/app/component/user/events/events.component';
import { WorkshopsComponent } from 'src/app/component/user/workshops/workshops.component';
import { AccomodationComponent } from 'src/app/component/user/accomodation/accomodation.component';
import { CartComponent } from 'src/app/component/user/cart/cart.component';
import { AuthGuard } from 'src/app/guard/auth/auth.guard';



export const USER_ROUTE: Routes = [
     { path: 'home', component: HomeComponent },
     { path: 'about', component: AboutComponent },
     { path: 'events', component: EventsComponent },
     { path: 'workshops', component: WorkshopsComponent },
     { path: 'accomodation', component: AccomodationComponent, canActivate:[AuthGuard] },
     { path: 'cart', component: CartComponent, canActivate:[AuthGuard]}
];