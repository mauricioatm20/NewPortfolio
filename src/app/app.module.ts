import { NgModule } from '@angular/core';
import {AppComponent} from "./app.component";
import {CertificacionesComponent} from "./components/certificaciones/certificaciones.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {ContactComponent} from "./components/contact/contact.component";



@NgModule({
  declarations: [
    AppComponent,
    CertificacionesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
