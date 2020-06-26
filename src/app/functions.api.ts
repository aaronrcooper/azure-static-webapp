import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FunctionsApi {

  constructor(private http: HttpClient) { }

  getMessage(): Observable<string> {
    return this.http.get<string>(`${environment.baseApiUrl}message`).pipe(
      tap(p => console.log(p))
    );
  }
}
