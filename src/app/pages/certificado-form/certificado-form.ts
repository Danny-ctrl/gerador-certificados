import { Component } from '@angular/core';
import { PrimaryButtonComponent } from "../../_components/primary-button/primary-button.component";
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { FormsModule, type NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import type { Certificados } from '../certificados/certificados';
import type { Certificado } from '../certificado/certificado';

@Component({
  selector: 'app-certificado-form',
  imports: [PrimaryButtonComponent, SecondaryButton,FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {

 certificado: Certificado={
    nome: '',
    atividades: []
 };
atividade:string='';

  campoInvalido(control: NgModel){
    return control.invalid && control.touched;
  }
  formValido(){
    return this.certificado.nome.length>0 && this.certificado.atividades.length>0;
  }
  adicionarAtividade(){
    this.certificado.atividades.push(this.atividade);
    this.atividade='';
  }
  excluirAtividade(index:number){
  this.certificado.atividades.splice(index,1);
  }
submit(){
if(!this.formValido()){
  return;
}

  console.log(this.certificado);
}
}
