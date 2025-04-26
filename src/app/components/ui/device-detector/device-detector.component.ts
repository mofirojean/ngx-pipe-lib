import { Component, signal } from '@angular/core';
import { DeviceTypePipe } from '../../../../../projects/ngx-pipe-lib/src/public-api';
import { NgIf } from '@angular/common';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroArrowPath } from '@ng-icons/heroicons/outline';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'app-device-detector',
  imports: [DeviceTypePipe, NgIf, HlmButtonDirective, NgIcon, HlmIconDirective],
  styles: ``,
  providers: [
    provideIcons({heroArrowPath})
  ],
  template: `
    <div class="lex items-center justify-center p-4">
      <div class="w-full max-w-2xl bg-white rounded-xl shadow-2xl border-[1px] border-gray-300">
        <div class="p-6 space-y-8">
          <h1 class="text-3xl font-bold text-center">Device Type Detector</h1>

          <div class="space-y-4">
            <h2 class="text-xl font-semibold">Detected Device:</h2>
            <div
              class="p-4 rounded-lg bg-gray-800 border border-gray-700 text-white font-mono text-lg"
            >
              {{ userAgent | device }}
            </div>
            <p class="text-sm text-gray-500">
              This component uses the <code>DeviceTypePipe</code> to detect the type of device
              you are currently using based on the user agent string.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="text-xl font-semibold text-gray-600">Features Based on Device:</h2>
            <div *ngIf="(userAgent | device) === 'desktop'">
              <div class="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md">
                <h3 class="font-bold text-lg">Desktop Features</h3>
                <ul class="list-disc list-inside space-y-1">
                  <li>Enhanced UI experience.</li>
                  <li>Multi-window support.</li>
                  <li>Advanced data visualization.</li>
                </ul>
              </div>
            </div>
            <div *ngIf="(userAgent | device) === 'tablet'">
              <div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md">
                <h3 class="font-bold text-lg">Tablet Features</h3>
                <ul class="list-disc list-inside space-y-1">
                    <li>Touch-optimized interface.</li>
                    <li>Larger screen for comfortable use.</li>
                    <li>Support for landscape and portrait modes.</li>
                </ul>
              </div>
            </div>
            <div *ngIf="(userAgent | device) === 'mobile'">
              <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md">
                <h3 class="font-bold text-lg">Mobile Features</h3>
                <ul class="list-disc list-inside space-y-1">
                    <li>Responsive and compact design.</li>
                    <li>Touch gestures support.</li>
                    <li>Offline access (if supported).</li>
                </ul>
              </div>
            </div>
            <div *ngIf="(userAgent | device) === 'unknown'">
              <p class="text-gray-400">
                Device type could not be determined. Some features may not be available.
              </p>
            </div>
          </div>
           <div class="text-center">
            <button
              (click)="refreshPage()"
              hlmBtn
              class="rounded-full px-6 py-2"
            >
              <ng-icon size="sm" hlm class="mr-2 {{isReload() ? 'animate-spin' : ''}}" name="heroArrowPath"/>
              Refresh Page
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class DeviceDetectorComponent {
  userAgent: string = typeof navigator !== 'undefined' ? navigator.userAgent : '';
  isReload = signal<boolean>(false);

  refreshPage(): void {
    this.isReload.set(true);
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        this.isReload.set(false)
        window.location.reload();
      }
    }, 3000)
  }
}
