import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPageAppointmentsComponent } from './doctor-page-appointments.component';

describe('DoctorPageAppointmentsComponent', () => {
  let component: DoctorPageAppointmentsComponent;
  let fixture: ComponentFixture<DoctorPageAppointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorPageAppointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorPageAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
