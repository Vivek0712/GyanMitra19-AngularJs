import { Component, OnInit } from '@angular/core';
import { ProbsService } from 'src/app/services/probs/probs.service';
import { RoleUserService } from 'src/app/services/role_user/role-user.service';

declare var M:any;

@Component({
  selector: 'app-problems-arised',
  templateUrl: './problems-arised.component.html',
  styleUrls: ['./problems-arised.component.css']
})
export class ProblemsArisedComponent implements OnInit {

  probs: Array<any>;
  role: any;
  constructor(private probService: ProbsService, private roleService: RoleUserService) { }

  ngOnInit() {
    this.getProblems();
    this.checkForRole();
  }

  getProblems() {
    this.probService.readProb().subscribe((response: any) => {
     this.probs = response;
    });

  }
  resolveProblem(id: string) {
    this.probService.resolveProblem(id).subscribe((response: any) => {
      if ( response.error ) {
        M.toast({ html: response.msg , classes: 'roundeds'});
        this.getProblems();
      } else {
        M.toast({ html: response.msg , classes: 'roundeds'});
        this.getProblems();
      }
    });
  }

  checkForRole() {
    this.roleService.readRoleUserById(JSON.parse(localStorage.getItem('user')).id).subscribe((response: any) => {
      if (response.success) {
        this.role = response.msg[0];
      }
      else {
        M.toast({ html: response.msg, classes: 'roundeds' });
      }
    })
  }


}
