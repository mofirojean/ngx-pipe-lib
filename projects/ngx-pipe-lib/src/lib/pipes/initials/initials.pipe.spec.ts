import { InitialsPipe } from './initials.pipe';

describe('InitialsPipe', () => {
  let pipe: InitialsPipe;

  beforeEach(() => {
    pipe = new InitialsPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should extract initials', () => {
    expect(pipe.transform('John Doe')).toBe('JD');
    expect(pipe.transform('Mary Jane Watson')).toBe('MJW');
  });

  it('should handle empty input', () => {
    expect(pipe.transform('')).toBe('');
  });
});