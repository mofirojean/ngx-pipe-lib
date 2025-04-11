import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import {HlmButtonDirective} from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';

@Component({
  selector: 'app-code-preview',
  imports: [HlmButtonDirective, NgIcon, HlmIconDirective],
  templateUrl: './code-preview.component.html',
  styles: `
    .dot {
      position: absolute;
      inset: 0;
      height: 100%;
      width: 100%;
      background-image: radial-gradient(#e5e7eb 2px, transparent 2px);
      background-size: 16px 16px;
    }
  `
})
export class CodePreviewComponent {

}
