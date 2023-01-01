import React from "react"
import { Task as TaskType } from "../types"
import SubTask from "./SubTask"


const Task: React.FC<TaskType> = ({ id, name, subTasks, completed }) => {
    
    return (
        <div className="task" data-id={id}>
            <div className="task__main">
                <p className="task__content">{name}</p>
                <button className="task__control delete">🗑</button>
                <button className="task__control complete">✔</button>
                <button className="task__control edit">🖉</button>
                <button className="task__control star">✰</button>
            </div>
            <div className="task__subtasks">
                {
                    subTasks.map((subTask) => {
                        return (
                            <SubTask key={subTask.id} id={subTask.id} name={subTask.name} completed={subTask.completed} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Task