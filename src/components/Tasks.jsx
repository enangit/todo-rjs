import { useRef } from "react"
import Button from "./Button"

const Tasks = ({ tasks, addTask, deleteTask }) => {
    console.log(tasks)
    const taskInputRef = useRef()

    return (
        <section
            className="tasks-section">

            <label
                htmlFor="tasks">
                Tasks
            </label>

            <form
                className="task-form">
                <input
                    className="task-input"
                    id="task-input"
                    ref={taskInputRef} />
                <Button
                    buttonText="Add Task"
                    onClick={(e) => {
                        e.preventDefault()
                        addTask(taskInputRef)
                    }} />
            </form>


            <ul
                className="tasks"
                id="tasks">

                {tasks.length === 0 && <p> You have no task/s on this project. </p>}

                {
                    tasks.length > 0 &&
                    tasks?.map(task => {
                        return (
                            <li
                                className="task"
                                key={task.id} >

                                <span>{task.title}</span>

                                <input
                                    type="checkbox"
                                    name="completed"
                                    id="completed"
                                    className="completed" />

                                <button
                                    className="delete-task-button"
                                    id="delete-task-button"
                                    onClick={() => {deleteTask(task.id)}}
                                >
                                    Delete
                                </button>

                            </li>
                        )
                    })
                }
            </ul>

        </section>
    )
}

export default Tasks
