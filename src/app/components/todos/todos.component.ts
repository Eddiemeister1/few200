import { Component, OnInit } from '@angular/core';
import { TodoListItemViewModel } from 'src/app/models/todos.models';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todoList: TodoListItemViewModel[] = [
    { id: '1', description: 'Rake Leaves' },
    { id: '2', description: 'Wash Deck' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onItemAdded(thing: { item: string }) {
    const newItem: TodoListItemViewModel = {
      description: thing.item,
      id: '99'
    };

    this.todoList = [newItem, ...this.todoList];
    console.log(thing);
  }
}
