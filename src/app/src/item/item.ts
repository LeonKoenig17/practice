import { Component, Input } from '@angular/core';

export interface Item {
  id: number;
  title: string;
  completed: boolean;
  created_at: string;
}

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.scss',
})

export class Item {
  @Input() amount: number = 0;
}
