import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EgiantsdetailsComponent } from './egiantsdetails.component';

describe('EgiantsdetailsComponent', () => {
  let component: EgiantsdetailsComponent;
  let fixture: ComponentFixture<EgiantsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgiantsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EgiantsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
