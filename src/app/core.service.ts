import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor() { }

//#region Private Variables
  private _appName:string = "App With A Plan";
  private _versionNumber: number = 0;
//#endregion

//#region Public Methods
  GetAppBaseName(): string{
    return this._appName;
  }

  GetAppFullName(): string {
    return this._appName + " - V" + this._versionNumber;
  }
//#endregion
}
