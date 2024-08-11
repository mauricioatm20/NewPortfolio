import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    NgForOf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('navbarToggler') navbarToggler!: ElementRef;
  @ViewChild('navbarNavDropdown') navbarNavDropdown!: ElementRef;

  logo = '/assets/images/logo.png';  // Ajusta la ruta a tu logo

  constructor() { }

  ngAfterViewInit() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const toggler = this.navbarToggler.nativeElement;

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (toggler.getAttribute('aria-expanded') === 'true') {
          toggler.click();
        }
      });
    });
  }

  onNavLinkClick() {
    // Esta función se activará cuando se haga clic en un enlace de navegación
    // Puedes agregar lógica adicional aquí si es necesario
  }
}
