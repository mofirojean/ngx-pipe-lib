import { Component, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck, lucideCopy } from '@ng-icons/lucide';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { ColorConvertPipe } from '../../../../../projects/ngx-pipe-lib/src/public-api';
import { ClipboardModule, Clipboard } from '@angular/cdk/clipboard';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-color-picker',
  standalone: true,
  imports: [
    NgIcon,
    HlmIconDirective,
    HlmInputDirective,
    FormsModule,
    ColorConvertPipe,
    ClipboardModule,
    NgStyle
  ],
  templateUrl: './color-picker.component.html',
  styles: [],
  providers: [
    provideIcons({ lucideCopy, lucideCheck }),
    Clipboard
  ]
})
export class ColorPickerComponent {
  color = signal<string>('#a855f7');
  clipboard = inject(Clipboard);
  isToggle1 = signal<boolean>(false);
  isToggle2 = signal<boolean>(false);

  isToggleHex = signal(false);
  isToggleRgb = signal(false);

  copyHex(value: string) {
    this.clipboard.copy(value);
    this.isToggleHex.set(true);
    setTimeout(() => this.isToggleHex.set(false), 1000);
  }

  copyRgb(value: string) {
    this.clipboard.copy(this.hexToRgba(value));
    this.isToggleRgb.set(true);
    setTimeout(() => this.isToggleRgb.set(false), 1000);
  }

  hexToRgba(hex: string, alpha?: number): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    if (alpha) {
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
    return `rgba(${r}, ${g}, ${b})`;
  }

  gradientStyle = computed(() => ({
    backgroundImage: `linear-gradient(to bottom right, ${this.hexToRgba(this.color(), 0.7)}, ${this.color()})`
  }));

  solidBgStyle = computed(() => ({
    backgroundColor: this.color()
  }));
}
