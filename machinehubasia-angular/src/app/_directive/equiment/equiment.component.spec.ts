import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquimentComponent } from './equiment.component';

describe('EquimentComponent', () => {
  let component: EquimentComponent;
  let fixture: ComponentFixture<EquimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquimentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
