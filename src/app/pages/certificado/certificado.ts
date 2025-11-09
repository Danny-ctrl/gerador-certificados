import { Component, OnInit } from '@angular/core';
import { SecondaryButton } from "../../_components/secondary-button/secondary-button";
import { RouterLink, ActivatedRoute } from "@angular/router";
import { CertificadoService } from '../../_services/certificado.service';
import type { Certificado as CertificadoModel } from '../../interfaces/certificado-interface';

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css'
})
export class Certificado implements OnInit {
  id: string | null = null;
  nome: any;
  atividades: any;
  dataEmissao: string = '';
  certificado: CertificadoModel|undefined;

  constructor(private certificadoService: CertificadoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.certificado = this.certificadoService.certificados.find(item => item.id === this.id);

    })
  }
}
