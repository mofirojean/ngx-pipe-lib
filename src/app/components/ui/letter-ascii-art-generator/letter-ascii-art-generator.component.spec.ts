import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterAsciiArtGeneratorComponent } from './letter-ascii-art-generator.component';

describe('LetterAsciiArtGeneratorComponent', () => {
  let component: LetterAsciiArtGeneratorComponent;
  let fixture: ComponentFixture<LetterAsciiArtGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LetterAsciiArtGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LetterAsciiArtGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
