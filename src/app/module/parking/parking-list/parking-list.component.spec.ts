import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ParkingListComponent } from './parking-list.component';

describe('ParkingListComponent', () => {
  let component: ParkingListComponent;
  let fixture: ComponentFixture<ParkingListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
