import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CertificacionesComponent} from "./components/certificaciones/certificaciones.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

const routes: Routes = [
  { path: 'certificaciones', component: CertificacionesComponent },
  // Otras rutas aquí
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
