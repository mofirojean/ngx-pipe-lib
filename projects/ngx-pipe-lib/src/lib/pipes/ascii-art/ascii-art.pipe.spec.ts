import { AsciiArtPipe } from './ascii-art.pipe';

describe('AsciiArtPipe', () => {
  it('create an instance', () => {
    const pipe = new AsciiArtPipe();
    expect(pipe).toBeTruthy();
  });
});
