import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodePreviewComponent } from './code-preview.component';

describe('CodePreviewComponent', () => {
  let component: CodePreviewComponent;
  let fixture: ComponentFixture<CodePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodePreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
