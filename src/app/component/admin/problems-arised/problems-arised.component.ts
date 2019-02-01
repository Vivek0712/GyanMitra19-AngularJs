import { Component, OnInit } from '@angular/core';
import { ProbsService } from 'src/app/services/probs/probs.service';

declare var M:any;

@Component({
  selector: 'app-problems-arised',
  templateUrl: './problems-arised.component.html',
  styleUrls: ['./problems-arised.component.css']
})
export class ProblemsArisedComponent implements OnInit {

  probs: Array<any>;
  constructor(private probService: ProbsService) { }

  ngOnInit() {
    this.getProblems();
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


}
