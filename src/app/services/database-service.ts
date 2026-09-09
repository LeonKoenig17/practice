import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Transaction {
  id: number;
  amount: number;
  category: string;
  currency: string;
  date: string;
}

export interface TodoItem {
  id: number;
  description: string;
}

export interface NewTodoItem {
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private transactionsUrl = "https://leonk-thedev.com/api/transactions.php";
  private todoUrl = "https://leonk-thedev.com/api/todo.php";

  constructor(private http: HttpClient) {}

  getTransactions() {
    return this.http.get<Transaction[]>(this.transactionsUrl);
  }

  getTodo() {
    return this.http.get<TodoItem[]>(this.todoUrl);
  }

  saveTodo(todo: NewTodoItem) {
    return this.http.post(this.todoUrl, todo);
  }

  updateTodo(todo: TodoItem) {
    return this.http.put<TodoItem>(this.todoUrl, todo);
  }
}
