import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCodeExampleComponent } from './qr-code-example.component';

describe('QrCodeExampleComponent', () => {
  let component: QrCodeExampleComponent;
  let fixture: ComponentFixture<QrCodeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrCodeExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrCodeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
