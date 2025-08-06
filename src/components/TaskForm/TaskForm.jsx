import React from "react"

const TaskForm = () => {
    return (
        <header className="app_header">
            <form>
                <input type="text" className="task_input" placeholder="Enter Task Detail" />
            </form>
            <div className="">
                <button className="tag">DEV</button>
                <button className="tag">QA</button>
                <button className="tag">Product Owner</button>
            </div>
            <select className="task_status">
                <option value='Ready for Development'>Ready for Development</option>
                <option value='In Progress'>In Progress</option>
                <option value='Ready for Test'>Ready for Test</option>
                <option value='Closed'>Closed✅</option>
            </select>
            <button type="submit" className="task_submit">+ Add</button>
        </header>
    )
};

export default TaskForm;