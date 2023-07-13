export class Todo {
  constructor(category) {
    this.category = category;
    this.tasks = [];
  }

  getCategory() {
    return this.category;
  }

  getTaskCount() {
    return this.tasks.length;
  }

  getTasks() {
    return this.tasks;
  }

  getTasksData(arg) {
    return this.tasks.map((x) => x.getInfo(arg));
  }

  getPendingTasks() {
    return this.tasks.filter((x) => !x.getState());
  }

  getCompletedTasks() {
    return this.tasks.filter((x) => x.getState());
  }

  addNewTask(task) {
    this.tasks.push(task);
  }

  deleteTask(task) {
    this.tasks = this.tasks.filter((x) => x !== task);
  }

  deleteAll() {
    this.tasks = [];
  }
}

export class Task {
  constructor(name) {
    this.name = name;
    this.category = '';
    this.state = false;
    this.age = new Date();
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

  getInfo(arg) {
    return this[arg];
  }
}
