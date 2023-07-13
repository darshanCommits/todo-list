import * as time from './time';
import { Todo, Task } from './classes';
import './input';
import './output';
import './storage';
import './app';

const bruh = new Todo('web');
const task1 = new Task('task1');
const current = new Date();
bruh.addNewTask(task1);
console.log(time.getFormattedDate(current));
