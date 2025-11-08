import { Injectable } from '@angular/core';
import type { Certificado } from '../interfaces/certificado-interface';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {
 certificados:Certificado [] = [];

  constructor() { }

  adicionarCertificado(certificado: Certificado){
    this.certificados.push(certificado);
    console.log(this.certificados);
  }
}
