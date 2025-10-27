import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar.component";
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";

@Component({
  selector: 'app-secondary-button',
  imports: [Navbar, PrimaryButtonComponent],
  templateUrl: './secondary-button.html',
  styleUrl: './secondary-button.css'
})
export class SecondaryButton {

}
