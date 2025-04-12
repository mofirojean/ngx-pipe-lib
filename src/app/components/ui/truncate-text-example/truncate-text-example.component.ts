import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmSwitchComponent } from '@spartan-ng/ui-switch-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { heroPaperAirplaneSolid } from '@ng-icons/heroicons/solid';
import { heroGlobeAlt, heroClipboard, heroUserPlus, heroClipboardDocumentCheck, heroCheck } from '@ng-icons/heroicons/outline';
import {trigger, transition, animate, style} from '@angular/animations';
import { TruncatePipe } from 'ngx-pipes';


@Component({
  selector: 'app-truncate-text-example',
  imports: [
    NgIcon,
    HlmIconDirective,
    HlmSwitchComponent,
    ReactiveFormsModule,
    HlmInputDirective,
    HlmButtonDirective,
    TruncatePipe
  ],
  templateUrl: './truncate-text-example.component.html',
  styles: ``,
  providers: [provideIcons({
    heroClipboard, 
    heroGlobeAlt, 
    heroPaperAirplaneSolid, 
    heroUserPlus,
    heroClipboardDocumentCheck,
    heroCheck
  })],
  animations: [
    trigger('animateInvite', [
      transition(':enter',[
        style({
          opacity: 0,
          height: 0,
          overflow: 'hidden'
        }),
        animate('300ms ease-in-out', style({opacity: 1, height: '*'}))
      ]
      ),
      transition(':leave', [
        style({height: '*'}),
        animate('300ms ease-in-out', style({opacity: 0}))
      ]
      ),
    ])
    
  ]
})
export class TruncateTextExampleComponent {
  toggle = new FormControl(false);
  copiedIcon = signal<string>('lucideCopy');
  protected readonly url = signal<string>('angular.dev/guide/templates/pipes#using-the-pipe-decorator')

  onCopy() {
    this.copiedIcon.update(_ => 'heroCheck'),
    setTimeout(() => {
      this.copiedIcon.update(_ => 'lucideCopy');
    }, 2000)
  }
}
