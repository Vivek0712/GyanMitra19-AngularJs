import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GyanMitra19-AngularJs';
  public href: string = "";
  constructor(private authService: AuthService,private router:Router) { }
  ngOnInit() {
        console.log(this.router.url);
  }
}
