import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    { task: 'Buy dog food', completed: false },
    { task: 'Pay Mary', completed: true },
    { task: 'Pay phone bill', completed: false },
    { task: 'Take out the trash', completed: true },
  ];
  constructor() {}

  ngOnInit(): void {}
}
