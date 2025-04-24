import { Component, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { GravatarPipe } from '../../../../../projects/ngx-pipe-lib/src/public-api';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { heroPaintBrush } from '@ng-icons/heroicons/outline';
import { FormsModule } from '@angular/forms';
import { heroPaintBrushSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-gravatar-generator',
  imports: [
    NgIcon,
    HlmIconDirective,
    GravatarPipe,
    HlmInputDirective,
    HlmButtonDirective,
    FormsModule
  ],
  templateUrl: './gravatar-generator.component.html',
  styles: ``,
  providers: [
    provideIcons({heroPaintBrush, heroPaintBrushSolid})
  ]
})
export class GravatarGeneratorComponent {
  email = signal<string>('example@gmail.com');
  gravatarEmail = signal<string>('');

  generateGravatar() {
    this.gravatarEmail.set(this.email());
  }
}
