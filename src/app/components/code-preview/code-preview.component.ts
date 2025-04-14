import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { PipePreviewComponent } from '../pipe-preview/pipe-preview.component';
import { ResetPasswordMaskComponent } from '../ui/reset-password-mask/reset-password-mask.component';

@Component({
  selector: 'app-code-preview',
  imports: [
    NgIcon, 
    HlmIconDirective, 
    ResetPasswordMaskComponent, 
    // PipePreviewComponent
  ],
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
