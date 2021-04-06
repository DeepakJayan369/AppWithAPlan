import { Component, OnInit } from '@angular/core';
import { CoreService } from "../core.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  //#region Initializations
  constructor(private _coreService: CoreService) { }

  ngOnInit(): void {
    this.title = this._coreService.GetAppFullName();
  }
  //#endregion

  //#region Variables
  title :string = "";
  //#endregion

  //#region TestCode
  // WelcomeHome(): string {
  //   return "Welcome to " + this.title;
  // } // Need to try to make available for other components. 
   // Or atleast the title
  // Maybe through a service perhaps
  //Done
  //#endregion

}
