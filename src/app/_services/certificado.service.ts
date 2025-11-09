import { Injectable } from '@angular/core';
import type { Certificado } from '../interfaces/certificado-interface';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {
 certificados:Certificado [] = [];

  constructor() { }

  adicionarCertificado(certificado: Certificado){
    this.certificados.unshift({...certificado});
    localStorage.setItem('certificados',JSON.stringify(this.certificados));
  }
}
