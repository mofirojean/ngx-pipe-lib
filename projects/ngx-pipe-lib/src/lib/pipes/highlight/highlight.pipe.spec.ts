import { BrowserModule, DomSanitizer, ɵDomSanitizerImpl } from '@angular/platform-browser';
import { HighlightPipe } from './highlight.pipe';
import { TestBed } from '@angular/core/testing';

describe('HighlightPipe', () => {
  let pipe: HighlightPipe;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule]
    });
    sanitizer = TestBed.inject(DomSanitizer);
    pipe = new HighlightPipe(sanitizer);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return original string if no search term', () => {
    const result = pipe.transform('Hello World!', '');
    expect(result).toBe('Hello World!');
  });

  it('should highlight search term', () => {
    const result = pipe.transform('Hello world', 'world');
    expect(result.toString()).toContain('<span class="highlight">world</span>');
  });

  it('should handle case-insensitive highlighting', () => {
    const result = pipe.transform('Hello World', 'WORLD');
    expect(result.toString()).toContain('<span class="highlight">World</span>');
  });

  it('should escape special characters', () => {
    const result = pipe.transform('Hello $10', '$10');
    expect(result.toString()).toContain('<span class="highlight">$10</span>');
  });
});
