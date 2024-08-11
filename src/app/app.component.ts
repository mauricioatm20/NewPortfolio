import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AboutMeComponent} from "./components/about-me/about-me.component";
import {CertificacionesComponent} from "./components/certificaciones/certificaciones.component";
import {HeaderComponent} from "./components/header/header.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {ContactComponent} from "./components/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutMeComponent, CertificacionesComponent, HeaderComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolioNew';
}
