import { JsonPrettyPipe } from './json-pretty.pipe';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';

describe('JsonPrettyPipe', () => {
  let pipe: JsonPrettyPipe;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule]
    });
    sanitizer = TestBed.inject(DomSanitizer);
    pipe = new JsonPrettyPipe(sanitizer);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format JSON string with default indentation', () => {
    const input = '{"name":"John","age":30}';
    const result = pipe.transform(input) as any;
    const html = result.changingThisBreaksApplicationSecurity;
    expect(html).toContain('<pre class="json-pretty">');
    expect(html).toContain('<span class="json-key">"name"</span>');
    expect(html).toContain('<span class="json-key">"age"</span>');
    expect(html).toContain('<span class="json-string">"John"</span>');
    expect(html).toContain('<span class="json-number">30</span>');
  });

  it('should format JSON object with custom indentation', () => {
    const input = { name: 'John', age: 30 };
    const result = pipe.transform(input, 4) as any;
    const html = result.changingThisBreaksApplicationSecurity;
    expect(html).toContain('<pre class="json-pretty">');
    expect(html).toMatch(/^\s{4}<span class="json-key">"name"/m); // Check 4-space indent
    expect(html).toMatch(/^\s{4}<span class="json-key">"age"/m);
  });

  it('should apply syntax highlighting', () => {
    const input = '{"name":"John","age":30,"active":true,"data":null}';
    const result = pipe.transform(input) as any;
    const html = result.changingThisBreaksApplicationSecurity;
    expect(html).toContain('<span class="json-key">"name"</span>');
    expect(html).toContain('<span class="json-string">"John"</span>');
    expect(html).toContain('<span class="json-number">30</span>');
    expect(html).toContain('<span class="json-boolean">true</span>');
    expect(html).toContain('<span class="json-null">null</span>');
    expect(html).toContain('<span class="json-punctuation">{</span>');
  });

  it('should handle invalid JSON', () => {
    const input = '{"name":"John",}';
    const result = pipe.transform(input) as any;
    const html = result.changingThisBreaksApplicationSecurity;
    expect(html).toContain('<span class="json-error">Invalid JSON');
  });

  it('should handle empty input', () => {
    const result = pipe.transform('') as any;
    const html = result.changingThisBreaksApplicationSecurity;
    expect(html).toContain('<span class="json-error">Invalid JSON');
  });

  it('should escape HTML characters', () => {
    const input = '{"name":"<script>alert(1)</script>"}';
    const result = pipe.transform(input) as any;
    const html = result.changingThisBreaksApplicationSecurity;
    expect(html).toContain('&lt;script&gt;');
    expect(html).not.toContain('<script>');
  });
});