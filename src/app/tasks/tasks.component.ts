import { Component } from '@angular/core';
import { Task } from './tasks';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent 
{
  task: Task[] = 
  [
    new Task(1, "Commit changes", false, new Date(), new Date ("2025-05-15")),
    new Task(2, "Check changes", false, new Date(), new Date ("2025-05-10"))
  ];
}
