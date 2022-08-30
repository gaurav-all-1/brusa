import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeguideComponent } from './sizeguide.component';

describe('SizeguideComponent', () => {
  let component: SizeguideComponent;
  let fixture: ComponentFixture<SizeguideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizeguideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
