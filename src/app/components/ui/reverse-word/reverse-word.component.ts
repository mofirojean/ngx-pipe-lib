import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon } from '@ng-icons/core';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { ReversePipe } from '../../../../../projects/ngx-pipe-lib/src/public-api';

@Component({
  selector: 'app-reverse-word',
  imports: [
    NgIcon,
    HlmInputDirective,
    FormsModule,
    ReversePipe
  ],
  templateUrl: './reverse-word.component.html',
  styles: ``
})
export class ReverseWordComponent {
  sampleText = signal<string>('Ambulance!');
}
