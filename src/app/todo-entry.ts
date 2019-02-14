import { Directive } from '@angular/core';

@Directive({ selector: '[appTodoEntry]' })
export class toDoEntry {
    title: string;
    details: string;
    constructor(title: string, details: string) {
        this.title = title;
        this.details = details;
    }
}