class Task {
  constructor(
    id,
    collab,
    assignees,
    assigner,
    deadline,
    description,
    completed
  ) {
    this.id = id;
    this.collab = collab;
    this.assignees = assignees;
    this.assigner = assigner;
    this.deadline = deadline;
    this.description = description;
    this.completed = completed;
  }
}

export default Task;
