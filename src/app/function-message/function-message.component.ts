import { Observable } from 'rxjs';
import { FunctionService } from './../function.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-function-message',
  templateUrl: './function-message.component.html',
  styleUrls: ['./function-message.component.css']
})
export class FunctionMessageComponent implements OnInit {
  message: Observable<string>;
  constructor(private functionService: FunctionService) { }

  ngOnInit(): void {
    this.message = this.functionService.getMessage();
  }

}
