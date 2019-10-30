import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelPumpListComponent } from './fuel-pump-list.component';

describe('FuelPumpListComponent', () => {
  let component: FuelPumpListComponent;
  let fixture: ComponentFixture<FuelPumpListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelPumpListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelPumpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
