import { Todo, Task } from './classes';
import './input';
import './output';
import './storage';
import './app';

const bruh = new Todo('web');
const task = new Task('Buy groceries')
  .setDueDate(new Date(2023, 6, 14))
  .setDueTime('18:00');

bruh.addNewTask(task);
const formattedDueDate = task.getDueDate();

console.log('Formatted Due Date:', formattedDueDate); // Output: Formatted Due Date: 14/07/23
const relativeDueTime = task.getRelativeDueTime();
console.log('Relative Due Time:', relativeDueTime);
