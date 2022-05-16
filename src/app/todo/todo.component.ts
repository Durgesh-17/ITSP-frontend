import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }
  todos:Todo[]=[]
  ngOnInit(): void {
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => this.todos=json)
  }

}
