import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnExchangeComponent } from './returnexchange.component';

describe('ReturnExchangeComponent', () => {
  let component: ReturnExchangeComponent;
  let fixture: ComponentFixture<ReturnExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnExchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
