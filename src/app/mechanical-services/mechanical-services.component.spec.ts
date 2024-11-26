import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicalServicesComponent } from './mechanical-services.component';

describe('MechanicalServicesComponent', () => {
  let component: MechanicalServicesComponent;
  let fixture: ComponentFixture<MechanicalServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MechanicalServicesComponent]
    });
    fixture = TestBed.createComponent(MechanicalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
