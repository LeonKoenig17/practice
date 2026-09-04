import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Transaction {
  id: number;
  amount: number;
  category: string;
  currency: string;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private apiURL = "https://leonk-thedev.com/api/transactions.php";

  constructor(private http: HttpClient) {}

  getTransactions() {
    return this.http.get<Transaction[]>(this.apiURL);
  }
}
