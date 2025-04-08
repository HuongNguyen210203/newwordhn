import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementRoomComponent } from './management-room.component';

describe('ManagementRoomComponent', () => {
  let component: ManagementRoomComponent;
  let fixture: ComponentFixture<ManagementRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementRoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
