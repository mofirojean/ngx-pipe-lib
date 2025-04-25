import { HighlightWordPipe } from './highlight-word.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';

describe('HighlightWordPipe', () => {
  let pipe: HighlightWordPipe;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule]
    });
    sanitizer = TestBed.inject(DomSanitizer);
    pipe = new HighlightWordPipe(sanitizer);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should highlight the first word', () => {
    const result = pipe.transform('Hello world', 0);
    const html = (result as any).changingThisBreaksApplicationSecurity;
    expect(html).toBe('<span class="highlight">Hello</span> world');
  });

  it('should highlight the second word', () => {
    const result = pipe.transform('Hello world', 2);
    const html = (result as any).changingThisBreaksApplicationSecurity;
    expect(html).toBe('Hello <span class="highlight">world</span>');
  });

  it('should return original text for invalid index', () => {
    const result = pipe.transform('Hello world', 10);
    const html = (result as any).changingThisBreaksApplicationSecurity;
    expect(html).toBe('Hello world');
  });

  it('should return empty string for falsy input', () => {
    const result = pipe.transform('', 0);
    const html = (result as any).changingThisBreaksApplicationSecurity;
    expect(html).toBe('');
  });

  it('should use custom highlight class', () => {
    const result = pipe.transform('Hello world', 0, 'custom-highlight');
    const html = (result as any).changingThisBreaksApplicationSecurity;
    expect(html).toBe('<span class="custom-highlight">Hello</span> world');
  });
});