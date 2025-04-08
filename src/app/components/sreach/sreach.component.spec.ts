import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SreachComponent } from './sreach.component';

describe('SreachComponent', () => {
  let component: SreachComponent;
  let fixture: ComponentFixture<SreachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SreachComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SreachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
