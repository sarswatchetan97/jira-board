import React from "react";
import "./TaskForm.css";
import Tag from "./../Tag/Tag";
import { useState } from "react";

const TaskForm = () => {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("");

  const handleTask = (e) => {
    setTask(e.target.value);
  }

  const handleStatus = (e) => {
    setStatus(e.target.value);
  }

  console.log(task, status);

  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          className="task_input"
          placeholder="Enter Task Detail"
          onChange={handleTask}
        />
        <div className="task_form_bottom">
          <div>
            <Tag tagName="DEV" />
            <Tag tagName="QA" />
            <Tag tagName="Product Owner" />
          </div>
          <div>
            <select className="task_status" onChange={handleStatus}>
              <option value="Ready for Development">
                Ready for Development
              </option>
              <option value="In Progress">In Progress</option>
              <option value="Ready for Test">Ready for Test</option>
              <option value="Closed">Closed✅</option>
            </select>
            <button type="submit" className="task_submit">
              + Add
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
