import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BarcodeElementType, BarcodePipe } from './barcode.pipe';
import { TestBed } from '@angular/core/testing';

describe('BarcodePipe', () => {
  let pipe: BarcodePipe;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrowserModule]
    });
    sanitizer = TestBed.inject(DomSanitizer);
    pipe = new BarcodePipe(sanitizer);
  })

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should generate SVG barcode', async () => {
    const result = await pipe.transform('123456789', { elementType: 'svg' as BarcodeElementType});
    expect(result).toBeInstanceOf(Object);
    const html = (result as any).changingThisBreaksApplicationSecurity;
    expect(html).toContain('<svg')
  });

  it('should generate image data URL for img', async () => {
    const result = await pipe.transform('123456789', { elementType: 'img' as BarcodeElementType });
    expect(result).toBeInstanceOf(Object);
    const url = (result as any).changingThisBreaksApplicationSecurity;
    expect(url).toMatch(/^data:image\/png;base64,/);
  });

  it('should generate image data URL for canvas', async () => {
    const result = await pipe.transform('123456789', { elementType: 'canvas' as BarcodeElementType });
    expect(result).toBeInstanceOf(Object);
    const url = (result as any).changingThisBreaksApplicationSecurity;
    expect(url).toMatch(/^data:image\/png;base64,/);
  });

  it('should apply custom options', async () => {
    const result = await pipe.transform('123456789', {
      elementType: 'svg' as BarcodeElementType,
      format: 'CODE128',
      width: 3,
      height: 150,
      lineColor: '#FF0000',
      displayValue: false
    });
    expect(result).toBeInstanceOf(Object);
    const html = (result as any).changingThisBreaksApplicationSecurity;
    expect(html).toContain('<svg');
    expect(html).toContain('width');
  });

  it('should handle empty input', async () => {
    const result = await pipe.transform('');
    expect(result).toBe('');
  });

  it('should handle invalid value', async () => {
    spyOn(console, 'error');
    const result = await pipe.transform('invalid', { format: 'EAN13' as any });
    expect(result).toBe('');
    expect(console.error).toHaveBeenCalledWith('Barcode generation failed:', '"invalid" is not a valid input for EAN13');
  });
});
