import { FunctionsApi } from './functions.api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {

  constructor(private functionsApi: FunctionsApi) { }

  getMessage(): Observable<string> {
    return this.functionsApi.getMessage();
  }
}
