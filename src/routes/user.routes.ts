import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from 'src/app/component/user/about/about.component';
import { ContactUsComponent } from 'src/app/component/user/contact-us/contact-us.component';
import { EventsComponent } from 'src/app/component/user/events/events.component';
import { WorkshopsComponent } from 'src/app/component/user/workshops/workshops.component';
import { CartComponent } from 'src/app/component/user/cart/cart.component';
import { AuthGuard } from 'src/app/guard/auth/auth.guard';
import { LoginComponent } from 'src/app/component/user/login/login.component';
import { RegisterComponent } from 'src/app/component/user/register/register.component';
import { ActivationComponent } from 'src/app/component/user/activation/activation.component';
import { UserAccomodationComponent } from 'src/app/component/user/user-accomodation/user-accomodation.component'
import { UserHomeComponent } from 'src/app/component/user/user-home/user-home.component';
import { TeamRegisterComponent } from 'src/app/component/user/team-register/team-register.component';
import { GyanMitra18Component } from 'src/app/component/user/gyan-mitra18/gyan-mitra18.component';
import { AdminGuard } from 'src/app/guard/admin/admin.guard';
import { PaymentSuccessComponent } from 'src/app/component/user/payment-success/payment-success.component';
import { PaymentFailureComponent } from 'src/app/component/user/payment-failure/payment-failure.component';
import { AccFailureComponent } from 'src/app/component/user/acc-failure/acc-failure.component';
import { AccSuccessComponent } from 'src/app/component/user/acc-success/acc-success.component'; import { HowToReachUsComponent } from 'src/app/component/user/how-to-reach-us/how-to-reach-us.component';
import { ResetPasswordComponent } from 'src/app/component/user/reset-password/reset-password.component';
import { ForgotpasswordComponent } from 'src/app/component/user/forgotpassword/forgotpassword.component';
import { FaqComponent } from 'src/app/component/user/faq/faq.component';
import { ScheduleComponent } from 'src/app/component/user/schedule/schedule.component';
export const USER_ROUTE: Routes = [
     { path: 'home', component: UserHomeComponent },
     { path: 'about', component: AboutComponent },
     { path: 'events', component: EventsComponent },
     { path: 'workshops', component: WorkshopsComponent },
     { path: 'login', component: LoginComponent },
     { path: 'register', component: RegisterComponent },
     { path: 'activate/:id/:hash', component: ActivationComponent },
     { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
     { path: 'accomodation', component: UserAccomodationComponent },
     { path: 'teamRegister/:id', component: TeamRegisterComponent },
     { path: 'gyanmitra18', component: GyanMitra18Component },
     { path: 'contactus', component: ContactUsComponent },
     { path: 'payment/success', component: PaymentSuccessComponent, canActivate: [AuthGuard] },
     { path: 'payment/failure', component: PaymentFailureComponent, canActivate: [AuthGuard] },
     { path: 'acc/payment/success', component: AccSuccessComponent, canActivate: [AuthGuard] },
     { path: 'acc/payment/failure', component: AccFailureComponent, canActivate: [AuthGuard] },
     { path: 'howtoreachus', component: HowToReachUsComponent },
     { path: 'resetPassword/:token', component: ResetPasswordComponent },
     { path: 'forgotPassword', component: ForgotpasswordComponent },
     { path: 'faq', component: FaqComponent },
     { path: 'schedule', component: ScheduleComponent }
];