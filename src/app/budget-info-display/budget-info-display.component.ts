import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CategoryInfo } from '../interfaces';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-budget-info-display',
  standalone: true,
  imports: [MatCardModule, MatListModule, CommonModule],
  templateUrl: './budget-info-display.component.html',
  styleUrl: './budget-info-display.component.scss'
})
export class BudgetInfoDisplayComponent {
  @Input() selectedCategory?: CategoryInfo

}
