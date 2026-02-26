import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  scrolled = signal(false);

  navLinks = [
    { label: 'Home',       path: '/'           },
    { label: 'About',      path: '/about'       },
    { label: 'Experience', path: '/experience'  },
    { label: 'Skills',     path: '/skills'      },
    { label: 'Projects',   path: '/projects'    },
    { label: 'Education',  path: '/education'   },
    { label: 'Contact',    path: '/contact'     },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }
}
