import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordEditorCountComponent } from './word-editor-count.component';

describe('WordEditorCountComponent', () => {
  let component: WordEditorCountComponent;
  let fixture: ComponentFixture<WordEditorCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordEditorCountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordEditorCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
