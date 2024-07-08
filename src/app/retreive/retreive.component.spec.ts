import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetreiveComponent } from './retreive.component';

describe('RetreiveComponent', () => {
  let component: RetreiveComponent;
  let fixture: ComponentFixture<RetreiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RetreiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetreiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
