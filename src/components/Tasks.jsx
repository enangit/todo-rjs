import { useRef } from "react"
import Button from "./Button"
import { useContext } from "react"
import { AppContext } from "../utils/AppContextPorvider"
import { FaTrashCan } from "react-icons/fa6"

const Tasks = () => {

    const { selectedProjectTasks: tasks, addTask, deleteTask, handleCompleteTask } = useContext(AppContext)

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
                    tasks?.map((task, idx) => {
                        return (
                            <li
                                className={task.completed ? "task completed" : "task"}
                                key={task.id} >
                                <span className="numbering">
                                    {idx + 1}.
                                </span>
                                <span className="task-text">{task.title}</span>

                                <input
                                    onClick={() => {
                                        handleCompleteTask(task.id)
                                    }}
                                    type="checkbox"
                                    name="completed"
                                    id="completed"
                                    className="completed" />

                                <button
                                    className="delete-task-button"
                                    id="delete-task-button"
                                    onClick={() => { deleteTask(task.id) }}
                                >
                                    <FaTrashCan
                                        className="icon"
                                    />
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
