import { Component } from '@angular/core';

@Component({
  selector: 'app-email-drop-down',
  templateUrl: './email-drop-down.component.html',
  styleUrls: ['./email-drop-down.component.css']
})
export class EmailDropDownComponent {
  // Dummy data for email dropdown 
  emailCategories: string[] = ['Employees', 'Customers', 'Field Employees'];
  selectedEmailCategory: string | undefined;
}
