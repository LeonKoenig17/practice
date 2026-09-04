import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Item } from './src/item/item';
import { Transaction, TransactionsService } from './services/transactions.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Item],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('practice');

  private transactionService = inject(TransactionsService);

  transactions = signal<Transaction[]>([]);

  ngOnInit(): void {

    this.transactionService.getTransactions().subscribe({
      next: (data) => {
        console.log('Transactions received:', data);
        this.transactions.set(data);
      },

      error: (error) => {
        console.error('Could not load transactions:', error);
      }
    });

  }
}
