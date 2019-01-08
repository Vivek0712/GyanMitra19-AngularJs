import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AppService } from 'src/app/services/app/app.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  constructor(public authService: AuthService,private appService: AppService) { }
  sideBarImage: string;
  ngOnInit() {
    this.loadSideBarImage();
  }
  loadSideBarImage() {
    if (this.appService.isProduction)
    {
      this.sideBarImage = this.appService.getFrontEndUrl() + 'public/images/backgrounds/02.jpg';
      this.sideBarImage.toString();
    } else {
      this.sideBarImage = this.appService.getFrontEndUrl() + 'public/images/backgrounds/02.jpg';
    }
  }
}
