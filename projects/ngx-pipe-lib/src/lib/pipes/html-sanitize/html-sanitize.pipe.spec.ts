import { HtmlSanitizePipe } from './html-sanitize.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer as DomSanitizerService } from '@angular/platform-browser';

describe('HtmlSanitizePipe', () => {
  let pipe: HtmlSanitizePipe;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule]
    });
    sanitizer = TestBed.inject(DomSanitizerService);
    pipe = new HtmlSanitizePipe(sanitizer);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sanitize HTML, removing unsafe tags', () => {
    const input = '<p>Hello</p><script>alert("xss")</script>';
    const result = pipe.transform(input);
    expect(result).toContain('<p>Hello</p>');
    expect(result).not.toContain('<script>');
  });

  it('should allow safe HTML tags and attributes', () => {
    const input = '<b>Bold</b><p class="test">Text</p>';
    const result = pipe.transform(input);
    expect(result).toContain('<b>Bold</b>');
    expect(result).toContain('<p class="test">Text</p>');
  });

  it('should return empty string for empty input', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('should return empty string for null input', () => {
    expect(pipe.transform(null as any)).toBe('');
  });

  it('should return empty string for undefined input', () => {
    expect(pipe.transform(undefined as any)).toBe('');
  });

  it('should handle malformed HTML', () => {
    const input = '<p>Unclosed tag';
    const result = pipe.transform(input);
    expect(result).toContain('Unclosed tag');
  });

  it('should remove unsafe attributes', () => {
    const input = '<p onclick="alert(1)">Text</p>';
    const result = pipe.transform(input);
    expect(result).toContain('<p>Text</p>');
    expect(result).not.toContain('onclick');
  });
});
