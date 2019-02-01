import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  user: User = new User();
  gender: String = "Male";
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.authService.getCurrentUser().subscribe((res: any) => {
        this.user = res.profile;
        this.gender = res.profile.gender;
      },
       err => {
         return false;
       });
    }
  }
  onLogoutClick() {
    this.authService.destroySession();
    this.router.navigate(['/auth/login']);
   }
}
