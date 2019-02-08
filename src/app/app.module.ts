import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtHelper } from 'angular2-jwt';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Select2Module } from 'ng2-select2';
/////////////////////////////////////////////////////////////////
import { routing } from '../routes/app.routes';
import { AppComponent } from './app.component';
import { QRCodeModule } from 'angularx-qrcode';
import { NgQrScannerModule } from 'angular2-qrscanner';
////////////////////////////////////////////////////////////
import { LoginComponent } from './component/user/login/login.component';
import { ActivationComponent } from './component/user/activation/activation.component';
import { RegisterComponent } from './component/user/register/register.component';
//////////////////////////////////////////////////////////////////
import { AdminComponent } from './component/admin/admin.component';
import { AdminEventComponent } from './component/admin/admin-event/admin-event.component';
import { AdminNavbarComponent } from './component/admin/admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './component/admin/admin-sidebar/admin-sidebar.component';
import { HomeComponent } from './component/admin/home/home.component';
import { CollegeComponent } from './component/admin/college/college.component';
/////////////////////////////////////////////////////////////////
import { AuthService } from './services/auth/auth.service';
import { AppService } from './services/app/app.service';
import { AccomodationService } from './services/accomodation/accomodation.service'
import { CourseService } from './services/course/course.service';
import { CollegeService } from './services/college/college.service';
import { CategoryComponent } from './component/admin/category/category.component';
import { DegreeComponent } from './component/admin/degree/degree.component';
import { DepartmentComponent } from './component/admin/department/department.component';
import { DegreeService } from './services/degree/degree.service';
import { DepartmentService } from './services/department/department.service';
import { CourseComponent } from './component/admin/course/course.component';
import { SearchfilterPipe } from './pipes/searchfilter.pipe';
import { ResolveCategoryPipe } from './pipes/resolve-category.pipe';
import { RegistrationService } from './services/registration/registration.service';
import { RoleService } from './services/role/role.service';
import { RoleUserService } from './services/role_user/role-user.service';
import { TeamService } from './services/team/team.service';
import { TeamMemberService } from './services/team_member/team-member.service';
import { ResolvecollegePipe } from './pipes/resolvecollege.pipe';
import { EventRegistrationService } from './services/eventRegistration/event-registration.service';
import { CertificateService } from './services/certificate/certificate.service'
///////////////////////////////////////////////////////////////////////////////////////
import { RegistrationComponent } from './component/admin/registration/registration.component';
import { ParticipantstatusComponent } from './component/admin/participantstatus/participantstatus.component';
import { NewRegistrationComponent } from './component/admin/new-registration/new-registration.component';
import { AdminUsersComponent } from './component/admin/admin-users/admin-users.component';
import { UserComponent } from './component/user/user.component';
import { UserNavbarComponent } from './component/user/user-navbar/user-navbar.component';
import { UserSidebarComponent } from './component/user/user-sidebar/user-sidebar.component';
import { AboutComponent } from './component/user/about/about.component';
import { ContactUsComponent } from './component/user/contact-us/contact-us.component';
import { EventsComponent } from './component/user/events/events.component';
import { WorkshopsComponent } from './component/user/workshops/workshops.component';
import { CartComponent } from './component/user/cart/cart.component';
import { UserHomeComponent } from 'src/app/component/user/user-home/user-home.component';
////////////////////////////////////////////////////////////////
import { AuthGuard } from './guard/auth/auth.guard';
import { YearComponent } from './component/admin/year/year.component';
import { AdminAccomodationComponent } from './component/admin/admin-accomodation/admin-accomodation.component';
import { UserAccomodationComponent } from './component/user/user-accomodation/user-accomodation.component';
import { RoleComponent } from './component/admin/role/role.component';
import { EventParticipantsComponent } from './component/admin/event-participants/event-participants.component';
import { EventParticipantsTeamComponent } from './component/admin/event-participants-team/event-participants-team.component';
import { TeamRegisterComponent } from './component/user/team-register/team-register.component';
import { FilterEventsBasedOnDepartmentPipe } from './pipes/filter-events-based-on-department.pipe';
import { AdminCartConfirmationComponent } from './component/admin/admin-cart-confirmation/admin-cart-confirmation.component';
import { GyanMitra18Component } from './component/user/gyan-mitra18/gyan-mitra18.component';
import { ConfigurationsComponent } from './component/admin/configurations/configurations.component';
import { RulesTransformPipe } from './pipes/rules-transform.pipe';
import { PaymentSuccessComponent } from './component/user/payment-success/payment-success.component';
import { PaymentFailureComponent } from './component/user/payment-failure/payment-failure.component';
import { AccFailureComponent } from './component/user/acc-failure/acc-failure.component';
import { AccSuccessComponent } from './component/user/acc-success/acc-success.component';
import { PaymentComponent } from './component/admin/payment/payment.component';
import { HowToReachUsComponent } from './component/user/how-to-reach-us/how-to-reach-us.component';
import { AdminUserRolesComponent } from './component/admin/admin-user-roles/admin-user-roles.component';
import { ReportserviceService } from './services/report/reportservice.service';
import { ResetPasswordComponent } from './component/user/reset-password/reset-password.component';
import { ForgotpasswordComponent } from './component/user/forgotpassword/forgotpassword.component';
import { FaqComponent } from './component/user/faq/faq.component';
import { SearchFilterEventPipe } from './pipes/search-filter-event.pipe';
import { LandingComponent } from './component/user/landing/landing.component';
import { QrService } from './services/qr/qr.service';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { ProbsComponent } from './component/admin/probs/probs.component';
import { ProblemsArisedComponent } from './component/admin/problems-arised/problems-arised.component';
import { ScheduleComponent } from './component/user/schedule/schedule.component';
import { EventScheduleComponent } from './component/user/event-schedule/event-schedule.component';
/////////////////////////////////////////////////////////////////

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CollegeComponent,
    LoginComponent,
    HomeComponent,
    AdminNavbarComponent,
    AdminSidebarComponent,
    CategoryComponent,
    DegreeComponent,
    DepartmentComponent,
    AdminEventComponent,
    CourseComponent,
    SearchfilterPipe,
    ResolveCategoryPipe,
    RegistrationComponent,
    RegisterComponent,
    ResolvecollegePipe,
    ParticipantstatusComponent,
    ActivationComponent,
    NewRegistrationComponent,
    AdminUsersComponent,
    UserComponent,
    UserNavbarComponent,
    UserSidebarComponent,
    AboutComponent,
    EventsComponent,
    WorkshopsComponent,
    CartComponent,
    YearComponent,
    ActivationComponent,
    AdminAccomodationComponent,
    UserAccomodationComponent,
    RoleComponent,
    EventParticipantsComponent,
    EventParticipantsTeamComponent,
    UserHomeComponent,
    TeamRegisterComponent,
    FilterEventsBasedOnDepartmentPipe,
    AdminCartConfirmationComponent,
    GyanMitra18Component,
    ConfigurationsComponent,
    RulesTransformPipe,
    PaymentSuccessComponent,
    PaymentFailureComponent,
    AccFailureComponent,
    AccSuccessComponent,
    AdminUserRolesComponent,
    ContactUsComponent,
    PaymentComponent,
    HowToReachUsComponent,
    ResetPasswordComponent,
    ForgotpasswordComponent,
    FaqComponent,
    SearchFilterEventPipe,
    LandingComponent,
    AdminHomeComponent,
    ProbsComponent,
    ProblemsArisedComponent,
    ScheduleComponent,
    EventScheduleComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    Select2Module,
    QRCodeModule,
    NgQrScannerModule
  ],
  providers: [
    JwtHelper,
    AuthService,
    AppService,
    CollegeService,
    DegreeService,
    DepartmentService,
    AccomodationService,
    CourseService,
    RegistrationService,
    RoleService,
    RoleUserService,
    TeamService,
    TeamMemberService,
    AuthGuard,
    EventRegistrationService,
    ReportserviceService,
    QrService,
    CertificateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
