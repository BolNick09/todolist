import { Component } from '@angular/core';
import { Task } from './tasks';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, FormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent 
{
  tasks: Task[] = 
  [
    new Task(1, "Commit changes", false, new Date(), new Date("2025-05-15"), "Alice"),
    new Task(2, "Check changes", false, new Date(), new Date("2025-05-10"), "Bob"),
    new Task(3, "Review code", false, new Date(), new Date("2025-05-20"), "Alice"),
    new Task(4, "Deploy to production", false, new Date(), new Date("2025-05-25"), "Charlie")
  ];

  filteredTasks: Task[] = [...this.tasks];
  selectedUser: string = 'all';
  selectedDateFilter: string = 'all';
  filterDate: Date = new Date();

  filterTasks() 
  {
    this.filteredTasks = this.tasks.filter(task => 
    {
      const userMatch = this.selectedUser === 'all' || task.user === this.selectedUser;
      
      if (this.selectedDateFilter === 'all') 
        return userMatch;
      
      
      const taskDate = new Date(task.expiringDate);
      taskDate.setHours(0, 0, 0, 0);
      const filterDate = new Date(this.filterDate);
      filterDate.setHours(0, 0, 0, 0);
      
      if (this.selectedDateFilter === 'today') 
        return userMatch && taskDate.getTime() === filterDate.getTime();
      else if (this.selectedDateFilter === 'upcoming') 
        return userMatch && taskDate > filterDate;
      else if (this.selectedDateFilter === 'overdue') 
        return userMatch && taskDate < filterDate;
      
      
      return userMatch;
    });
  }

  getUniqueUsers(): string[] 
  {
    const users = new Set<string>();
    this.tasks.forEach(task => users.add(task.user));
    return ['all', ...Array.from(users)];
  }
}
