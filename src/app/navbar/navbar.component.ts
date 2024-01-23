import { Component, ViewChild } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SideListComponent } from '../side-list/side-list.component';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule,MatButtonModule, SideListComponent,MatSidenavModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
}
