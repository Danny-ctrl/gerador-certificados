import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from "./_components/navbar/navbar.component";



import { BaseUi } from "./_components/base-ui/base-ui";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, RouterOutlet, CommonModule, BaseUi],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gerador-certificado';
  exibeNavbar: boolean = true;
}
