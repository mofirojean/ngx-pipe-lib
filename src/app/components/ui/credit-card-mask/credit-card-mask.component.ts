import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroArrowLeftSolid, heroEyeSlashSolid, heroEyeSolid } from '@ng-icons/heroicons/solid';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { CreditCardMaskPipe } from '../../../../../projects/ngx-pipe-lib/src/lib/pipes/credit-card-mask/credit-card-mask.pipe';

@Component({
  selector: 'app-credit-card-mask',
  imports: [
    NgIcon,
    HlmIconDirective,
    CreditCardMaskPipe
  ],
  templateUrl: './credit-card-mask.component.html',
  styles: ``,
  providers: [provideIcons({
    heroArrowLeftSolid,
    heroEyeSolid,
    heroEyeSlashSolid
  })]
})
export class CreditCardMaskComponent {
  isToggle = signal<boolean>(false);
  creditCardNumber = '1232 4345 3453 4465';

  toggleView() {
    this.isToggle.update(value => !value)
  }
}
