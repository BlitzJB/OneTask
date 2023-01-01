import { useEffect, useState } from "react"
import Task from "./Task"
import { Task as TaskType } from "../types" 
import { TaskInputProps } from "../types"
import TaskInput from "./TaskInput"

const MainContent = () => {

    const [tasks, setTasks] = useState<TaskType[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const localTasks = localStorage.getItem('tasks')
        if (localTasks) {
            setTasks(JSON.parse(localTasks))
        } else {
            localStorage.setItem('tasks', JSON.stringify([]))
        }
    }, [])

    return (
        <main className="maincontent hideScroll">
            <div className="topbar">
                <h1>Tasks</h1>
            </div>
            <div className="tasks hideScroll" id="tasks">
                {
                    tasks.map((task) => {
                        return (
                            <Task key={task.id} id={task.id} name={task.name} subTasks={task.subTasks} completed={task.completed} />
                        )
                    })
                }
            </div>
            {
                loading && <div className="loading">Loading...</div>
            }
            <TaskInput setTasks={setTasks} setLoading={setLoading} />
        </main>
    )
}

export default MainContent