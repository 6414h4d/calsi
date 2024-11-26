import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherBowlingServicesComponent } from './other-bowling-services.component';

describe('OtherBowlingServicesComponent', () => {
  let component: OtherBowlingServicesComponent;
  let fixture: ComponentFixture<OtherBowlingServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherBowlingServicesComponent]
    });
    fixture = TestBed.createComponent(OtherBowlingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
