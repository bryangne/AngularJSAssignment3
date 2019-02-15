import { Component } from '@angular/core';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  toDoList: string[] = [];
  newTask: string;
  constructor() {
    this.newTask = '';
    // Get the existing list ONLY if it exists.
    // Otherwise, a new one is created when a task is added.
    if(localStorage.getItem('todolist') !== null) {
      this.toDoList = JSON.parse(localStorage.getItem('todolist'));
    }
  }

  // ionViewDidLoad() {
  //   this.toDoList = JSON.parse(localStorage.getItem('todolist'));
  //   console.log('something changed!');
  // }

  addNewTask() {
    this.toDoList.push(this.newTask);
    localStorage.setItem('todolist', JSON.stringify(this.toDoList));
    this.newTask = '';
  }

  removeTask(task: string) {
    // alert('remove item ' + task);
    const index = this.toDoList.indexOf(task, 0);
    this.toDoList.splice(index, 1);
    localStorage.setItem('todolist', JSON.stringify(this.toDoList));
  }
}
