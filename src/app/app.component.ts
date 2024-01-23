import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import { SideListComponent } from './side-list/side-list.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, NavbarComponent, SideListComponent]
})
export class AppComponent {
  title = 'budget-tracker';
}
