import { Component, signal, computed, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common'; // Needed for AsyncPipe
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroArrowDownTray, heroQrCode } from '@ng-icons/heroicons/outline';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { QRCodePipe, QRCodeOptions, QRCodeErrorCorrectionLevel } from '../../../../../projects/ngx-pipe-lib/src/public-api';
import * as QRCode from 'qrcode';

interface QRCodeGenerationOptions {
  errorCorrectionLevel?: QRCodeErrorCorrectionLevel;
  margin?: number;
  width?: number;
  scale?: number;
  color?: { dark: string; light: string };
}

@Component({
  selector: 'app-qr-code-example',
  standalone: true,
  imports: [
    AsyncPipe,
    QRCodePipe,
    NgIcon,
    HlmIconDirective,
    HlmButtonDirective,
    HlmInputDirective,
    ReactiveFormsModule,
  ],
  templateUrl: './qr-code-example.component.html',
  styles: [`
    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    .qr-display-container {
        min-height: 182px; /* Approx height of p-6 + 150px QR */
        display: flex;
        align-items: center;
        justify-content: center;
    }
  `],
  providers: [
    provideIcons({heroQrCode, heroArrowDownTray})
  ]
})
export class QrCodeExampleComponent {
  requestUrl = new FormControl('', Validators.required);
  urlToEncode = signal<string>('');
  displayQrCode = computed(() => !!this.urlToEncode());

  qrDisplayOptions: QRCodeOptions = {
      elementType: 'svg',
      width: 150,
      errorCorrectionLevel: 'M',
      margin: 4,
      colorDark: '#000000ff',
      colorLight: '#ffffffff'
  };

  isDownloading = signal(false);
  isGenerating = signal(false);

  generateQrCode() {
    if (this.requestUrl.invalid) {
        this.urlToEncode.set('');
        return;
    }
    this.isGenerating.set(true);
    this.urlToEncode.set(this.requestUrl.value || '');
    setTimeout(() => this.isGenerating.set(false), 300);
  }

  async downloadQrCode() {
    const url = this.urlToEncode();
    if (!url) {
      console.error('No URL available to generate QR code for download.');
      return;
    }

    this.isDownloading.set(true);

    const downloadOptions: QRCodeGenerationOptions = {
      errorCorrectionLevel: 'M',
      margin: 4,
      width: 300, // Larger size for download quality
      scale: 6,
      color: { dark: '#000000ff', light: '#ffffffff' }
    };

    try {
      const dataUrl = await QRCode.toDataURL(url, downloadOptions);
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'qrcode.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      console.error('Failed to generate QR code for download:', error);
    } finally {
      this.isDownloading.set(false);
    }
  }
}