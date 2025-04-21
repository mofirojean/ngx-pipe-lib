import { Component, signal } from '@angular/core';
import { InitialsPipe } from '../../../../../projects/ngx-pipe-lib/src/public-api';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { BrnMenuTriggerDirective } from '@spartan-ng/brain/menu';
import {
  HlmMenuBarItemDirective,
  HlmMenuComponent,
} from '@spartan-ng/ui-menu-helm';

import { 
  heroArrowLeftStartOnRectangle, 
  heroArrowTrendingUp, heroBell, 
  heroChatBubbleBottomCenterText, 
  heroCog, 
  heroCubeTransparent, 
  heroMoon, 
  heroPlus, 
  heroTableCells 
} from '@ng-icons/heroicons/outline';
import { HlmSwitchComponent } from '@spartan-ng/ui-switch-helm';
import { MenuItem, menuItems } from './menuitems';

interface User {
  name: string;
  email: string;
}


@Component({
  selector: 'app-profile-initials',
  imports: [
    InitialsPipe,
    HlmIconDirective,
    NgIcon,
    HlmMenuBarItemDirective,
    HlmMenuComponent,
    BrnMenuTriggerDirective,
    HlmSwitchComponent
  ],
  templateUrl: './profile-initials.component.html',
  styles: ``,
  providers: [
    provideIcons({
      heroBell,
      heroChatBubbleBottomCenterText,
      heroMoon,
      heroArrowTrendingUp,
      heroPlus,
      heroTableCells,
      heroArrowLeftStartOnRectangle,
      heroCog,
      heroCubeTransparent
    })
  ]
})
export class ProfileInitialsComponent {
  items: MenuItem[] = menuItems;
  user = signal<User>({
    name: 'John Doe',
    email: 'johndoe@gmail.com'
  })
}
