import { Component } from '@angular/core';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  toDoList: string[] = [];
  constructor() {
    this.toDoList = JSON.parse(localStorage.getItem('todolist'));
    // localStorage.setItem('todolist', JSON.stringify(this.toDoList));
  }
}
