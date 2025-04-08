import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementEventComponent } from './management-event.component';

describe('ManagementEventComponent', () => {
  let component: ManagementEventComponent;
  let fixture: ComponentFixture<ManagementEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
