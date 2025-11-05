import { Component } from '@angular/core';
import { PrimaryButtonComponent } from "../../_components/primary-button/primary-button.component";
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { FormsModule, type NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificado-form',
  imports: [PrimaryButtonComponent, SecondaryButton,FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {
  nome:string = '';
  atividade:string = '';
  atividades:string[] = [];

  campoInvalido(control: NgModel){
    return control.invalid && control.touched;
  }
  formValido(){
    return this.nome.length>0 && this.atividades.length>0;
  }
  adicionarAtividade(){
    this.atividades.push(this.atividade);
    this.atividade='';
  }
  excluirAtividade(index:number){
  this.atividades.splice(index,1);
  }

}
