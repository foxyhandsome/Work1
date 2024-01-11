import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

export class TaskService {
    private _httpClient =  inject(HttpClient);


  getTaskId(taskid: Number): Observable<any> {
    const apiUrl = `http://103.13.31.37:17444/api/tasks/${taskid}`;
    return this._httpClient.get(apiUrl);
  }

}