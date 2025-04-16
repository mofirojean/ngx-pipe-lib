import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { QRCodeElementType, QRCodeErrorCorrectionLevel, QRCodePipe } from './qr-code.pipe';
import { TestBed } from '@angular/core/testing';
import * as QrCode from 'qrcode';

describe('QrCodePipe', () => {
  let pipe: QRCodePipe;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrowserModule]
    });
    sanitizer = TestBed.inject(DomSanitizer);
    pipe = new QRCodePipe(sanitizer);
  });

  it('should create an instance', async() => {
    expect(pipe).toBeTruthy();
    expect(await pipe.transform(null as any)).toBe('');
    expect(await pipe.transform(undefined as any)).toBe('');
  });

  it('should return empty string for invalid input', async() => {
    const result = await pipe.transform('');
    expect(result).toBe('');
  });

  it('should generate SVG QR code', async() => {
    const result = await pipe.transform('https://example.com', { elementType: 'svg'});
    expect(typeof result).toBe('object');
    const html = (result as any).changingThisBreaksApplicationSecurity;
    expect(html).toContain('<svg');
  });

  it('should generate image data URL for img', async () => {
    const result = await pipe.transform('https://example.com', { elementType: 'img' as QRCodeElementType });
    expect(result).toBeInstanceOf(Object);
    const url = (result as any).changingThisBreaksApplicationSecurity;
    expect(url).toMatch(/^data:image\/png;base64,/);
  });

  it('should generate image data URL for canvas', async () => {
    const result = await pipe.transform('https://example.com', { elementType: 'canvas' as QRCodeElementType });
    expect(result).toBeInstanceOf(Object);
    const url = (result as any).changingThisBreaksApplicationSecurity;
    expect(url).toMatch(/^data:image\/png;base64,/);
  });

  it('should handle errors gracefully', async() => {
    spyOn(require('qrcode'), 'toString').and.throwError('Mock error');
    const result = await pipe.transform('test', { elementType: 'svg'});
    expect(result).toBe('');
  })
});
