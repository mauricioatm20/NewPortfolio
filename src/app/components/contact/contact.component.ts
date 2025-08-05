import {Component, } from '@angular/core';
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  downloadCV() {
    // Crea un elemento de enlace temporal
    const link = document.createElement('a');
    link.href = '/assets/pdf/CvEdwinMauricio.pdf'; // URL del archivo a descargar
    link.download = 'CV.MauricioChasi.pdf'; // Nombre del archivo al descargar
    link.style.display = 'none'; // Ocultar el enlace
    document.body.appendChild(link); // Añadir el enlace al DOM
    link.click(); // Simular el clic en el enlace
    document.body.removeChild(link); // Eliminar el enlace del DOM
  }
}
