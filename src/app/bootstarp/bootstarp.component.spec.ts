import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstarpComponent } from './bootstarp.component';

describe('BootstarpComponent', () => {
  let component: BootstarpComponent;
  let fixture: ComponentFixture<BootstarpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstarpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstarpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
