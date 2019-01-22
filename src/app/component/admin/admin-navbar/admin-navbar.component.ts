import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
  user: User = new User();
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    if ( this.authService.isLoggedIn()) {
      this.authService.getCurrentUser().subscribe((res: any) => {
        this.user = res.profile;
      },
       err => {
       
         return false;
       });
    }
  }
  onLogoutClick() {
    this.authService.destroySession();
    this.router.navigate(['/user/login']);
   }

}
