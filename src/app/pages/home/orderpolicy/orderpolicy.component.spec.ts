import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPolicyComponent } from './orderpolicy.component';

describe('OrderPolicyComponent', () => {
  let component: OrderPolicyComponent;
  let fixture: ComponentFixture<OrderPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
