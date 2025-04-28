import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorseCodeGeneratorComponent } from './morse-code-generator.component';

describe('MorseCodeGeneratorComponent', () => {
  let component: MorseCodeGeneratorComponent;
  let fixture: ComponentFixture<MorseCodeGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MorseCodeGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorseCodeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
