import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';
import { AppService } from './services/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GyanMitra19-AngularJs';
  public href: string = "";
  constructor(private authService: AuthService,private router:Router,private appService: AppService) { }
  ngOnInit() {
   // console.log(this.href = this.appService.getUrl(this.router.url));
    // console.log(window.location.pathname);
  }
  checkUrl() {
    this.href = window.location.pathname;
    if (this.href == '/auth/login' || this.href == '/auth/register' )
    {
      return true;
    }
    else {
      return false;
    }
  }
}
