import React from "react";
import "./TaskForm.css";
import Tag from "./../Tag/Tag";
import { useState } from "react";

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    task: '',
    status: 'Ready for Development'
  })

  const handleChange = (e) => {
   const { name, value } = e.target;
   setTaskData((prev)=>{
    return {...prev, [name]: value};
   });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
  }

  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("");

  // const handleTask = (e) => {
  //   setTask(e.target.value);
  // }

  // const handleStatus = (e) => {
  //   setStatus(e.target.value);
  // }

  // console.log(task, status);

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="task_input"
          name="task"
          placeholder="Enter Task Detail"
          onChange={handleChange}
        />
        <div className="task_form_bottom">
          <div>
            <Tag tagName="DEV" />
            <Tag tagName="QA" />
            <Tag tagName="Product Owner" />
          </div>
          <div>
            <select className="task_status" name="status" onChange={handleChange}>
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
