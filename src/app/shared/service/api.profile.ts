import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

export class ProfileService {
    private _httpClient =  inject(HttpClient);

  getProfileInfo(): Observable<any> {
    const apiUrl = 'http://103.13.31.37:17444/api/my/profile';
    return this._httpClient.get(apiUrl);
  }

  getTaskBox(): Observable<any> {
    const apiUrl = 'http://103.13.31.37:17444/api/tasks';
    return this._httpClient.get(apiUrl);
  }

}