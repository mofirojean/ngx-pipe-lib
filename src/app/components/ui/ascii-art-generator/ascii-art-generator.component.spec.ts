import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsciiArtGeneratorComponent } from './ascii-art-generator.component';

describe('AsciiArtGeneratorComponent', () => {
  let component: AsciiArtGeneratorComponent;
  let fixture: ComponentFixture<AsciiArtGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsciiArtGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsciiArtGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
