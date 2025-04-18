import { IpAddressMaskPipe } from './ip-address-mask.pipe';

describe('IpAddressMaskPipe', () => {
  let pipe: IpAddressMaskPipe;

  beforeEach(() => {
    pipe = new IpAddressMaskPipe();
  })

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should mask IP address', () => {
    expect(pipe.transform('192.168.1.1')).toBe('192.168.*.*');
    expect(pipe.transform('10.0.0.255')).toBe('10.0.*.*');
  });

  it('should return invalid input unchanged', () => {
    expect(pipe.transform('invalid')).toBe('invalid');
    expect(pipe.transform('')).toBe('');
  });
});
