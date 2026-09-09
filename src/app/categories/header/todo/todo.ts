import { Component, inject, signal } from '@angular/core';
import { DatabaseService, TodoItem } from '../../../services/database-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [ReactiveFormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {
  private databaseService = inject(DatabaseService);
  todo = signal<TodoItem[]>([]);
  editingItemId: number | null = null;
  isOpen: boolean = false;
  
  inputForm = new FormGroup({
    inputControl: new FormControl('', Validators.required),
    editControl: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    this.loadTodo();
  }
  
  onSubmit() {
    const inputControl = this.inputForm.controls.inputControl;

    if (inputControl.invalid) {
        inputControl.markAsTouched();
        return;
    }

    this.databaseService.saveTodo({
      description: inputControl.value!
    }).subscribe({
      next: () => {
        console.log('Todo saved');

        this.loadTodo();
        this.inputForm.reset();
        this.closeInterface();
      },
      error: (err) => {
        console.error('Could not save todo:', err);
      }
    });
  }
  
  updateTodo(id: number) {
    const editControl = this.inputForm.controls.editControl;

    if (editControl.invalid) {
        editControl.markAsTouched();
        return;
    }

    this.databaseService.updateTodo({
      id, 
      description: editControl.value!
    }).subscribe(() => {
      this.loadTodo();
      this.closeEditInterface();
    })
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

  openEditInterface(item: TodoItem) {
    this.editingItemId = item.id;
    this.inputForm.controls.editControl.setValue(item.description);
  }

  closeEditInterface() {
    this.editingItemId = null;
  }

  openInterface() {
    console.log("AddItemInterface opened");
    this.isOpen = true;
  }

  closeInterface() {
    console.log("Interface close");
    this.isOpen = false;
  }
}
