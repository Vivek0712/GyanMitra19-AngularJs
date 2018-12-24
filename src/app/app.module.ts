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
<<<<<<< HEAD
import { AppService } from './services/app/app.service';
=======
import { AccomodationService } from './services/accomodation/accomodation.service'
import { AppService } from './services/app/app.service';
import { CourseService } from './services/course/course.service';
>>>>>>> 73bbf5a3ef82509a38acca831e1aec404d2fa97e
import { CollegeService } from './services/college/college.service';
import { CategoryComponent } from './component/admin/category/category.component';
import { DegreeComponent } from './component/admin/degree/degree.component';
import { DepartmentComponent } from './component/admin/department/department.component';
import { DegreeService } from './services/degree/degree.service';
import { DepartmentService } from './services/department/department.service';
import { CourseComponent } from './component/admin/course/course.component';
<<<<<<< HEAD
import { SearchfilterPipe } from './pipes/searchfilter.pipe';
import { ResolveCategoryPipe } from './pipes/resolve-category.pipe';
=======
import { RegistrationService } from './services/registration/registration.service';
import { RoleService } from './services/role/role.service';
import { RoleUserService } from './services/role_user/role-user.service';
import { TeamService } from './services/team/team.service';
import { TeamMemberService } from './services/team_member/team-member.service';
import { SearchfilterPipe } from './pipes/searchfilter.pipe';
>>>>>>> 73bbf5a3ef82509a38acca831e1aec404d2fa97e
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
<<<<<<< HEAD
    SearchfilterPipe,
    ResolveCategoryPipe,
=======
    SearchfilterPipe
>>>>>>> 73bbf5a3ef82509a38acca831e1aec404d2fa97e
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
<<<<<<< HEAD
    DepartmentService
=======
    DepartmentService,
    AccomodationService,
    CourseService,
    RegistrationService,
    RoleService,
    RoleUserService,
    TeamService,
    TeamMemberService
>>>>>>> 73bbf5a3ef82509a38acca831e1aec404d2fa97e
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
