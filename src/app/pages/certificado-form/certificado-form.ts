import { Component } from '@angular/core';
import { PrimaryButtonComponent } from "../../_components/primary-button/primary-button.component";
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";

@Component({
  selector: 'app-certificado-form',
  imports: [PrimaryButtonComponent, SecondaryButton],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {

}
