export class Todo {
  constructor(category) {
    this.category = category;
    this.tasks = [];
  }

  getCategory() {
    return this.category;
  }

  getTasks() {
    return this.tasks;
  }

  getPendingTasks() {
    return this.tasks.filter((x) => !x.getState());
  }

  getCompletedTasks() {
    return this.tasks.filter((x) => x.getState());
  }

  getTaskCount() {
    return this.tasks.length;
  }

  addNewTask(task) {
    this.tasks.push(task);
  }

  deleteTask(task) {
    this.tasks = this.tasks.filter((x) => x !== task);
  }

  clearAll() {
    this.tasks = [];
  }
}
export class Task {
  constructor(name) {
    this.name = name;
    this.state = false;
  }

  setDueDate(date) {
    this.dueDate = date;
    return this;
  }

  setDueTime(time) {
    this.dueTime = time;
    return this;
  }

  setUrgency(priority) {
    this.urgency = priority;
    return this;
  }

  toggleState() {
    this.state = !this.state;
    return this;
  }

  getState() {
    return this.state;
  }

  getTaskData() {
    const { name, dueDate, dueTime, urgency, state } = this;
    return { name, dueDate, dueTime, urgency, state };
  }
}
