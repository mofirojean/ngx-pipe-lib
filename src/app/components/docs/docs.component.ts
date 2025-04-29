import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideAlignCenterVertical, lucideGithub, lucideList, lucideListCollapse } from '@ng-icons/lucide';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
import { sidebarItems, SidebarItem } from '../../utils/sidebar';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { heroBars3 } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-docs',
  imports: [
    RouterOutlet,
    NgIcon,
    HlmSeparatorDirective,
    RouterLink,
    RouterLinkActive,
    HlmIconDirective,
    HlmButtonDirective
  ],
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.scss',
  providers: [
    provideIcons({
      lucideAlignCenterVertical,
      lucideGithub,
      lucideListCollapse,
      lucideList,
      heroBars3
    })
  ]
})
export class DocsComponent {
  sidebarItems = signal<SidebarItem[]>(sidebarItems);
  viewSidebar = signal<boolean>(false);

  toggleSideView() {
    this.viewSidebar.update(value => !value)
  }

  triggerToggle(e: Event) {
    e.stopPropagation();
    this.toggleSideView();
  }
}
