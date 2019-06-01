import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-routing-error',
  templateUrl: './routing-error.component.html',
  styleUrls: ['./routing-error.component.css']
})
export class RoutingErrorComponent implements OnInit {

  constructor(public router:Router) {

  }

  ngOnInit() {
    document.getElementById("errorMessage").innerHTML = "Thats not cute or something went terribly wrong(maybe permissions)";
    setTimeout(() => {
      this.router.navigateByUrl("/login");
    },4000);
  }

}
