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

//#region Event Update

getThingsToDo() {
  return this.request('GET', `${environment.serverUrl}/todo`);
}

createThingsToDo(todo) {
  return this.request('POST', `${environment.serverUrl}/todo`, todo);
}

updateThingsToDo(todo) {
  return this.request('PUT', `${environment.serverUrl}/todo/${todo.id}`, todo);
}

deleteThingsToDo(todo) {
  return this.request('DELETE', `${environment.serverUrl}/todo/${todo.id}`);
}
//#endregion

//#region Streaks Update : Still to be edited, to remove 'event' object
getStreaks() {
  return this.request('GET', `${environment.serverUrl}/streak`);
}

createStreak(event) {
  return this.request('POST', `${environment.serverUrl}/streak`, event);
}

updateStreak(event) {
  return this.request('PUT', `${environment.serverUrl}/streak/${event.id}`, event);
}

deleteStreak(event) {
  return this.request('DELETE', `${environment.serverUrl}/streak/${event.id}`);

}
//#endregion

//#endregion

}

