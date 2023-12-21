import { Component } from '@angular/core';

@Component({
  selector: 'app-category-drop-down',
  templateUrl: './category-drop-down.component.html',
  styleUrls: ['./category-drop-down.component.css']
})
export class CategoryDropDownComponent {
  // Dummy data for the dropdown
  categories: string[] = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
  selectedCategory: string | undefined;
}
