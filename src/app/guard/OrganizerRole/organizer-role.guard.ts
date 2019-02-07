import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleUserService } from 'src/app/services/role_user/role-user.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizerRoleGuard implements CanActivate {
  loaded:Boolean = false
  role: string = "";
  constructor(private roleUserService: RoleUserService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // this.roleUserService.readRoleUserById(JSON.parse(localStorage.getItem('user')).id).subscribe((response: any) => {
    //   if (response.success) {
    //     this.role = response.msg[0].role_id.name;
    //     return true;
    //   } else {
    //     return false;
    //   }
    // })
    return true;
  }
}
