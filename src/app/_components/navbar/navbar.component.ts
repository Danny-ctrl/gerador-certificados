import { Component} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router";


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class Navbar {
title = 'Gerador de Certificados';
exibeNavbar: boolean = true;
}
