import { CountPipe } from './count.pipe';

describe('CountPipe', () => {
  let pipe: CountPipe;

  beforeEach(() => {
    pipe = new CountPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return 0 for empty or invalid input', () => {
    expect(pipe.transform('')).toBe(0);
    expect(pipe.transform(null as any)).toBe(0);
    expect(pipe.transform(undefined as any)).toBe(0);
  });

  it('should count words correctly.', () => {
    expect(pipe.transform('Hello world')).toBe(2);
    expect(pipe.transform('one  two   three')).toBe(3);
    expect(pipe.transform('Angular')).toBe(1);
  });

  it('should count characters when is "chars"', () => {
    expect(pipe.transform('Hello', 'chars')).toBe(5);
    expect(pipe.transform('Hi there!', 'chars')).toBe(9);
  });
});
