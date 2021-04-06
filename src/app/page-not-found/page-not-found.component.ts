import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  error404 = "Sorry, the page you are requesting does not exist or is under maintainance.";

  ReDirect(): string {
    return "Please go back to the previous page or go to the Home Page using the link below.";
  }

  GoHome(): void {
    this.router.navigate(['/Home']);
  }

}
