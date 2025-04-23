import { ColorConvertPipe } from './color-convert.pipe';

describe('ColorConvertPipe', () => {
  let pipe: ColorConvertPipe;

  beforeEach(() => {
    pipe = new ColorConvertPipe();
  })

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
