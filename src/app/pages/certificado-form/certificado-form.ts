import { Component } from '@angular/core';
import { PrimaryButtonComponent } from "../../_components/primary-button/primary-button.component";
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { FormsModule, type NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import type { Certificados } from '../certificados/certificados';
import type { Certificado } from '../certificado/certificado';
import  { CertificadoService } from '../../_services/certificado.service';

@Component({
  selector: 'app-certificado-form',
  imports: [PrimaryButtonComponent, SecondaryButton,FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {

constructor(private certificadoService: CertificadoService) { }

 certificado: Certificado={
    nome: '',
    atividades: [],
    dataEmissao:''
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
  this.certificado.dataEmissao=this.dataAtual();
  this.certificadoService.adicionarCertificado(this.certificado);

}
dataAtual(){
 const dataAtual = new Date();
 const dia = String(dataAtual.getDate()).padStart(2,'0');
 const mes = String(dataAtual.getMonth()+1).padStart(2,'0');
 const ano = dataAtual.getFullYear();

 const dataFormatada = `${dia}/${mes}/${ano}`;
 return dataFormatada;
}
}
