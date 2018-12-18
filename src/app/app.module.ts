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
import { AdminNavbarComponent } from './component/admin/admin-navbar/admin-navbar.component';
import { AdminSidebarComponent } from './component/admin/admin-sidebar/admin-sidebar.component';
import { HomeComponent } from './component/admin/home/home.component';
import { CollegeComponent } from './component/admin/college/college.component';
/////////////////////////////////////////////////////////////////
import { AuthService } from './services/auth/auth.service';
import { AppService } from './services/app/app.service';
import { CollegeService } from './services/admin/college/college.service';
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
    AdminSidebarComponent
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
    CollegeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
