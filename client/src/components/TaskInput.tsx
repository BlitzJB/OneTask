import React, { useEffect, useRef } from "react"
import { Task, TaskInputProps } from "../types"
import uuid from "react-uuid"

const TaskInput: React.FC<TaskInputProps> = ({ setTasks, setLoading }) => {

    const [input, setInput] = React.useState("")
    const [breakdown, setBreakdown] = React.useState<number | false>(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const formRef = useRef<HTMLFormElement>(null)

    const taskID = uuid()

    

    const addTask = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if (breakdown && input !== "") {    
            setLoading(true)
            const response = await fetch('http://127.0.0.1:5000/getSubtasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    task: input,
                    num_subtasks: breakdown
                })
            })
            const subtasks = await response.json()
            const subtasksArray = subtasks.map((subtask: string) => {
                return { id: uuid(), name: subtask, completed: false }
            })
            setTasks((prevTasks: Task[]) => {
                return [...prevTasks, { id: taskID, name: input, subTasks: subtasksArray, completed: false } as Task]
            })
            setLoading(false)
        } else if (input !== "") {
            setTasks((prevTasks: Task[]) => {
                return [...prevTasks, { id: taskID, name: input, subTasks: [], completed: false } as Task]
            })
        }

        setInput("")
        setBreakdown(false)
        if (inputRef.current) {
            inputRef.current.value = ""
        }
    }

    const taskInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const breakdownPattern = /--breakdown ([0-9]+)/i
        const breakdownMatch = e.target.value.match(breakdownPattern)
        breakdownMatch && e.target.value.replace(breakdownPattern, "") !== '' 
            ? setBreakdown(parseInt(breakdownMatch[1])) : setBreakdown(false)
        setInput(e.target.value.replace(breakdownPattern, "").trim())
    }

    return (
        <form className="tasksinput" onSubmit={addTask} ref={formRef}>
            <input type="text" placeholder="Create Task" ref={inputRef} onChange={taskInputOnChange}/>
        </form>
    )
}

export default TaskInput