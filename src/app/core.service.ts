import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http:HttpClient) { }

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

//#region DB Service
private async request(method: string, url: string, data?: any) {

  const result = this.http.request(method, url, {
    body: data,
    responseType: 'json',
    observe: 'body'
  });
  return new Promise((resolve, reject) => {
    result.subscribe(resolve, reject);
  });
}

getEvents() {
  return this.request('GET', `${environment.serverUrl}/event`);
}

createEvent(event) {
  return this.request('POST', `${environment.serverUrl}/event`, event);
}

updateEvent(event) {
  return this.request('PUT', `${environment.serverUrl}/event/${event.id}`, event);
}

deleteEvent(event) {
  return this.request('DELETE', `${environment.serverUrl}/event/${event.id}`);
}

//#endregion

}

