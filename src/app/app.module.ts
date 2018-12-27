import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtHelper } from 'angular2-jwt';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
/////////////////////////////////////////////////////////////////
import { routing } from '../routes/app.routes';
import { AppComponent } from './app.component';
////////////////////////////////////////////////////////////
import { AuthComponent } from './component/auth/auth.component';
import { LoginComponent } from './component/auth/login/login.component';
import { AuthNavbarComponent } from './component/auth/auth-navbar/auth-navbar.component';
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
import { RegistrationComponent } from './component/admin/registration/registration.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { ResolvecollegePipe } from './pipes/resolvecollege.pipe';
import { RegisterverifyComponent } from './component/auth/register/registerverify/registerverify.component';
import { NewRegistrationComponent } from './component/admin/new-registration/new-registration.component';
import { AdminUsersComponent } from './component/admin/admin-users/admin-users.component';

/////////////////////////////////////////////////////////////////


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CollegeComponent,
    AuthComponent,
    LoginComponent,
    AuthNavbarComponent,
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
    RegisterverifyComponent,
    NewRegistrationComponent,
    AdminUsersComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
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
    TeamMemberService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
