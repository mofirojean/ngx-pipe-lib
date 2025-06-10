import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SanitizeHtmlComponent } from './sanitize-html.component';
import { HtmlSanitizePipe } from '../../../../../projects/ngx-pipe-lib/src/public-api';
import { FormsModule } from '@angular/forms';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';

describe('SanitizeHtmlComponent', () => {
  let component: SanitizeHtmlComponent;
  let fixture: ComponentFixture<SanitizeHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [SanitizeHtmlComponent, HtmlSanitizePipe, HlmInputDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(SanitizeHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render a textarea', () => {
    const textarea = fixture.nativeElement.querySelector('textarea');
    expect(textarea).toBeTruthy();
  });

  it('should display sanitized HTML in the output', () => {
    // Set a test HTML string
    const testHtml = `<div><b>Hello</b> <i>World</i></div>`;
    component.sampleText.set(testHtml);
    fixture.detectChanges();

    const outputDiv = fixture.nativeElement.querySelector('[innerHTML]');
    expect(outputDiv.innerHTML).toContain('Hello');
    expect(outputDiv.innerHTML).toContain('World');
    // Optionally, check that script tags are removed (sanitized)
    component.sampleText.set('<script>alert("xss")</script><b>Safe</b>');
    fixture.detectChanges();
    expect(outputDiv.innerHTML).toContain('Safe');
    expect(outputDiv.innerHTML).not.toContain('script');
  });
});
