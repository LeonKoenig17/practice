import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Item } from './src/item/item';
import { Supabase } from './services/supabase';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Item],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('practice');

  private supabase = inject(Supabase);

  items = signal<Item[]>([]);

  async ngOnInit() {
    const data = await this.supabase.getItems();
    this.items.set(data);
  }
}
