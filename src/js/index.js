import { Todo, Task } from './classes';
import './input';
import './output';
import './storage';
import './app';

const prompt = document.querySelector('#input-prompt');
const bruh = new Todo('web');
const task = new Task('Buy groceries')
  .setDueDate(new Date(2023, 6, 14))
  .setDueTime('12:00');

prompt.addEventListener('keydown', input.enterEvent);
