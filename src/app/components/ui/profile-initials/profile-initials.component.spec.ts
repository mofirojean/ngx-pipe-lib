import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInitialsComponent } from './profile-initials.component';

describe('ProfileInitialsComponent', () => {
  let component: ProfileInitialsComponent;
  let fixture: ComponentFixture<ProfileInitialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileInitialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileInitialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
