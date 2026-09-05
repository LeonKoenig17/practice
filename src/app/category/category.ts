import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.html',
  styleUrl: './category.scss',
})
export class Category {
  @Input() category: any;
}
