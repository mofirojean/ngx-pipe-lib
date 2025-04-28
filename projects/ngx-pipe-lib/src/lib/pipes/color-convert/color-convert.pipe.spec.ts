import { ColorConvertPipe } from './color-convert.pipe';

describe('ColorConvertPipe', () => {
  let pipe: ColorConvertPipe;

  beforeEach(() => {
    pipe = new ColorConvertPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should convert HEX to RGB', () => {
    expect(pipe.transform('#FF0000', 'rgb')).toBe('rgb(255, 0, 0)');
  });

  it('should convert RGB to HEX', () => {
    expect(pipe.transform('rgb(0, 255, 0)', 'hex')).toBe('#00FF00');
  });

  it('should return input for invalid format', () => {
    expect(pipe.transform('invalid', 'rgb')).toBe('invalid');
  });
});