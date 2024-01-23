import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { CategoryComponent } from '../category/category.component';
import { CATEGORY } from '../db.data';
import { CategoryInfo } from '../interfaces';
import { BudgetInfoDisplayComponent } from '../budget-info-display/budget-info-display.component';
import {MatListModule, MatSelectionListChange} from '@angular/material/list';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-side-list',
  standalone: true,
  imports: [MatButtonModule, MatSidenavModule, FormsModule, CategoryComponent,BudgetInfoDisplayComponent,MatListModule, CommonModule],
  templateUrl: './side-list.component.html',
  styleUrl: './side-list.component.scss'
})
export class SideListComponent {
opened = false;
categories = CATEGORY;
selectedCategory?: CategoryInfo;

  compareFunction = (o1: any, o2: any) => o1.id === o2.id;

  selectChange(event: MatSelectionListChange)  {
    console.log("::selectChange ", event, event.options.at(0)?.value)
    this.selectedCategory = event.options.at(0)?.value

  }

}
