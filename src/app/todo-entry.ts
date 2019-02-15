import { Directive } from '@angular/core';

@Directive({ selector: '[appTodoEntry]' })
export class toDoEntry {
    entry: string;
    index: number;
    constructor(entry: string, index: number) {
        this.entry = entry;
        this.index = index;
    }
}