import { Component, inject, signal } from '@angular/core';
import { Category } from '../category/category';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DatabaseService, TodoItem } from '../services/database-service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterLinkActive, Category],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly title = signal('practice');
  private databaseService = inject(DatabaseService);
  todo = signal<TodoItem[]>([]);

  categories: any[] = [
    { title: "To-Do", route: 'todo', cols: 2, rows: 2},
    { title: "Calendar events", route: 'calendar', cols: 4, rows: 1},
    { title: "Weather", route: 'weather', cols: 4, rows: 1},
    { title: "Countdown timers", route: 'countdown', cols: 6, rows: 1},
    { title: "Expense tracker", route: 'expense-tracker', cols: 4, rows: 2},
    { title: "Monthly budget", route: 'budget', cols: 2, rows: 1},
    { title: "Subscription tracker", route: 'subscriptions', cols: 2, rows: 1},
    { title: "Grocery list", route: 'grocery-list', cols: 3, rows: 1},
    { title: "Notes", route: 'notes', cols: 3, rows: 2},
    { title: "Favourite recipes", route: 'recipes', cols: 3, rows: 1},
    { title: "Weight tracker", route: 'weight-tracker', cols: 6, rows: 1},
    { title: "Flight tracker", route: 'flight-tracker', cols: 3, rows: 1},
    { title: "Vacation tracker", route: 'hotel-tracker', cols: 3, rows: 1},
    { title: "Projects", route: 'projects', cols: 2, rows: 1},
    { title: "Home inventory", route: 'home-inventory', cols: 4, rows: 1},
    { title: "Digital library", route: 'digital-library', cols: 3, rows: 1},
    { title: "Personal knowledge", route: 'personal-knowledge', cols: 3, rows: 1},
    { title: "Smart home control", route: 'smart-home-control', cols: 2, rows: 1},
    { title: "Phone usage monitoring", route: 'phone-usage-monitoring', cols: 4, rows: 1},
  ]

  ngOnInit(): void {
    this.loadTodo();
  }

  loadTodo() {
    this.databaseService.getTodo().subscribe({
      next: (data) => {
        console.log('todo received:', data);
        this.todo.set(data);
      },
      error: (error) => {
        console.error('Could not load todo:', error);
      }
    });
  }
}

// ideas to implement:
// - todays tasks
// - calendar events
// - weather
// - abroad time and weather
// - notes
// - quick links
// - countdown timers
// - expense tracker
// - flight tracker
// - vacation tracker
// - monthly budget
// - subscription tracker
// - grocery list
// - favourite recipes
// - weight tracker
// - home inventory 
// - - purchase prices
// - - pictures
// - digital library of books, movies, music, games, etc.
// - - ratings
// - - wish list
// - - recommendations
// - personal knowledge
// - - people (names, birthdays, addresses, phone numbers, emails, etc. )
// - - knowledge on all topics of interest
// - - tipps and tricks
// - smart home control
// - - lights, cameras, notifications, etc.
// - phone usage monitoring (screen time tracking)
// - projects
// - goals
