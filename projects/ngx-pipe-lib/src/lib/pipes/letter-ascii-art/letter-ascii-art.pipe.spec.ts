import { LetterAsciiArtPipe } from './letter-ascii-art.pipe';

describe('LetterAsciiArtPipe', () => {
  let pipe: LetterAsciiArtPipe;

  beforeEach(() => {
    pipe = new LetterAsciiArtPipe()
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should convert "HI" to ASCII art', () => {
    const result = pipe.transform('HI');
    expect(result).toContain('<pre>');
    expect(result).toContain('┳┳ ┳');
    expect(result).toContain('┣┣ ┃');
    expect(result).toContain('┻┻ ┻');
  });

  it('should convert "A" to ASCII art', () => {
    const result = pipe.transform('A');
    expect(result).toContain('<pre>');
    expect(result).toContain(' ┳ ');
    expect(result).toContain('┣┳');
    expect(result).toContain('┻┻');
  });

  it('should handle mixed case input', () => {
    const result = pipe.transform('Hi');
    expect(result).toContain('┳┳ ┳');
    expect(result).toContain('┣┣ ┃');
    expect(result).toContain('┻┻ ┻');
  });

  it('should handle unknown characters with spaces', () => {
    const result = pipe.transform('H!I');
    expect(result).toContain('┳┳    ┳');
    expect(result).toContain('┣┣    ┃');
    expect(result).toContain('┻┻    ┻');
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

  it('should limit input to 10 characters', () => {
    const result = pipe.transform('ABCDEFGHIJK');
    const lines = result.split('\n');
    expect(lines[1].length).toBeLessThanOrEqual(44); // 10 chars * 4 (3 art + 1 space) + <pre>
  });
});
