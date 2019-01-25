import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var urlParams = [];
    window.location.search.replace("?", "").split("&").forEach(function (e, i) {
      var p = e.split("=");
      urlParams[p[0]] = p[1];
    });

    // We have all the params now -> you can access it by name

    if (urlParams["loaded"]) { } else {

      let win = (window as any);
      win.location.search = '?loaded=1';
      //win.location.reload('?loaded=1');
    }
  }

}
