import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CATEGORY } from '../db.data';
import { CategoryInfo } from '../interfaces';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  categories = CATEGORY;
  @Input() categoryInfo!: CategoryInfo; // Input property to receive data
}
