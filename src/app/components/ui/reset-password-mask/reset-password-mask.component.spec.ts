import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordMaskComponent } from './reset-password-mask.component';

describe('ResetPasswordMaskComponent', () => {
  let component: ResetPasswordMaskComponent;
  let fixture: ComponentFixture<ResetPasswordMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPasswordMaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPasswordMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
