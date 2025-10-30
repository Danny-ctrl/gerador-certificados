import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from "./_components/navbar/navbar.component";
import { PrimaryButtonComponent } from "./_components/primary-button/primary-button.component";
import { SecondaryButton } from './_components/secondary-button/secondary-button';
import { ItemCertificado } from "./_components/item-certificado/item-certificado";
import { BaseUi } from "./_components/base-ui/base-ui";
import { Certificados } from "./pages/certificados/certificados";
import { CertificadoForm } from "./pages/certificado-form/certificado-form";
import { Certificado } from './pages/certificado/certificado';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, RouterOutlet, CommonModule, PrimaryButtonComponent, SecondaryButton, ItemCertificado, BaseUi, Certificados, CertificadoForm,Certificado],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gerador-certificado';
  exibeNavbar: boolean = true;
}
