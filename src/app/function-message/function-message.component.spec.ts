import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionMessageComponent } from './function-message.component';

describe('FunctionMessageComponent', () => {
  let component: FunctionMessageComponent;
  let fixture: ComponentFixture<FunctionMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
