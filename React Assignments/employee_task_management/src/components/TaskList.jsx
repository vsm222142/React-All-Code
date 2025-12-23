import { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([
    { name: "Task 1", status: "done" },
    { name: "Task 2", status: "not done" },
    { name: "Task 3", status: "done" }
  ]);

  const toggleStatus = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return {
          ...task,
          status: task.status === "done" ? "not done" : "done"
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="task-container">
      <h2>Employee Task List</h2>

      {tasks.map((task, index) => (
        <div className="task-item" key={index}>
          <span
            className={
              task.status === "done" ? "task-done" : "task-notdone"
            }
          >
            {task.name} - {task.status}
          </span>
          <button
            className="toggle-btn"
            onClick={() => toggleStatus(index)}
          >
            Toggle
          </button>
        </div>
      ))}
    </div>
  );
}
export default TaskList;
