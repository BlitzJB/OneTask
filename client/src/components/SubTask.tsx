import React from "react";
import { SubTask as SubTaskType } from "../types";

const SubTask: React.FC<SubTaskType> = ({ id, name, completed }) => {

    return (<>
        <div className="task subtask" data-id={id}>
            <div className="task__main">
                <p className="subtask__content">→ {name}</p>
            </div>
        </div>
    </>)
}

export default SubTask