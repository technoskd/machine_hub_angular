import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineHubComponent } from './machine-hub.component';

describe('MachineHubComponent', () => {
  let component: MachineHubComponent;
  let fixture: ComponentFixture<MachineHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
