import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-home-welcome',
  templateUrl: './home-welcome.component.html',
  styleUrls: ['./home-welcome.component.css']
})
export class HomeWelcomeComponent implements OnInit {

  //#region Initializations
  constructor(private _coreService: CoreService) { }

  ngOnInit(): void {
    this.title = this._coreService.GetAppBaseName();
  }
  //#endregion

  //#region Variables
  title: string ="";
  //#endregion

  //#region Public Methods
  Welcome(): string{        
    return "Bonjour et Bienvenue! Welcome to " + this.title +"!";    
  }

  Selection(): string{
    return "Please select the page you wish to go to, from the below list:";
  }
  //#endregion

}
