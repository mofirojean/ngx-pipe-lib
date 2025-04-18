import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroArrowPathRoundedSquare, heroComputerDesktop, heroCpuChip, heroMapPin } from '@ng-icons/heroicons/outline';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { IpAddressMaskPipe } from '../../../../../projects/ngx-pipe-lib/src/public-api';

@Component({
  selector: 'app-ip-address-mask',
  imports: [
    HlmButtonDirective,
    NgIcon,
    HlmIconDirective,
    IpAddressMaskPipe
  ],
  templateUrl: './ip-address-mask.component.html',
  styles: ``,
  providers: [
    provideIcons({heroCpuChip, heroMapPin, heroComputerDesktop, heroArrowPathRoundedSquare})
  ]
})
export class IpAddressMaskComponent {
  sampleIp = signal<string>('192.168.2.34');
  isMasked = signal<boolean>(false);

  onMaskIp() {
    this.isMasked.update(value => !value);
  }
}
