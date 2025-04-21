export interface MenuItem {
    icon: string;
    name: string;
    switcher?: boolean
}

export const menuItems: MenuItem[] = [
    {
      icon: 'heroMoon',
      name: 'Dark Mode',
      switcher: true
    },
    {
      icon: 'heroArrowTrendingUp',
      name: 'Activity'
    },
    {
      icon: 'heroTableCells',
      name: 'Integrations'
    },
    {
      icon: 'heroCog',
      name: 'Settings'
    },
    {
      icon: 'heroPlus',
      name: 'Add Account'
    },
    {
      icon: 'heroArrowLeftStartOnRectangle',
      name: 'Logout'
    }
  ];
  