import { GravatarPipe } from './gravatar.pipe';

describe('GravatarPipe', () => {
  let pipe: GravatarPipe;

  beforeEach(() => {
    pipe = new GravatarPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should generate Gravatar URL', () => {
    const result = pipe.transform('user@example.com', 100);
    expect(result).toContain('https://www.gravatar.com/avatar/');
    expect(result).toContain('s=100');
  });

  it('should handle empty input', () => {
    expect(pipe.transform('')).toBe('https://www.gravatar.com/avatar/?s=80');
  });
});
