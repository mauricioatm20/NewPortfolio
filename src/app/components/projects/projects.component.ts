import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
caja:string= '/assets/images/project/portfolio1.jpg';
  election:string= '/assets/images/project/portfolio2.jpg';
concesionario:string= '/assets/images/project/portfolio3.jpg';
}
