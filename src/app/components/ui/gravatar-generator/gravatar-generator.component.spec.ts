import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GravatarGeneratorComponent } from './gravatar-generator.component';

describe('GravatarGeneratorComponent', () => {
  let component: GravatarGeneratorComponent;
  let fixture: ComponentFixture<GravatarGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GravatarGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GravatarGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
