import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  items: MenuItem [] | undefined;
    ngOnInit() {
    this.items = [
    {
    label: 'Home',
    icon: 'pi pi-home'
    },
    {
    label: 'Ejemplos',
    icon: 'pi pi-search',
    items: [
        {
        label: 'Ejemplo 1',
        icon: 'pi pi-bolt',
        routerLink: '/signal-ejemplo1'
        },
        {
        label: 'Ejmplo 2',
        icon: 'pi pi-server',
        routerLink: '/signal-ejemplo2'
        },
        {
        label: 'UI Kit',
        icon: 'pi pi-pencil'
        },
        {
        label: 'Templates',
        icon: 'pi pi-palette',
        items: [
        {
        label: 'Apollo',
        icon: 'pi pi-palette'
        },
        {
        label: 'Ultima',
        icon: 'pi pi-palette'
        }
        ]
        }
        ]
    },
    {
    label: 'Contact',
    icon: 'pi pi-envelope'
    }
    ]
    }
}