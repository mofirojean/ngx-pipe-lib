import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { BarcodePipe } from '../../../../../projects/ngx-pipe-lib/src/public-api';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { heroShoppingCart } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-barcode-generator',
  imports: [
    NgIcon,
    HlmIconDirective,
    HlmButtonDirective,
    AsyncPipe,
    BarcodePipe
  ],
  templateUrl: './barcode-generator.component.html',
  styles: ``,
  providers: [
    provideIcons({heroShoppingCart})
  ]
})
export class BarcodeGeneratorComponent {

}
