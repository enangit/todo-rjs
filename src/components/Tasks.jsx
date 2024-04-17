import Button from "./Button"
import { useContext, useRef, useState, useEffect } from "react"
import { AppContext } from "../utils/ContextPorvider"
import { FaTrashCan } from "react-icons/fa6"

const Tasks = () => {

    const { selectedProjectTasks: tasks, addTask, deleteTask, handleCompleteTask } = useContext(AppContext)

    const taskInputRef = useRef(null)

    const [seletectedFilter, setSelectedFilter] = useState("all")
    const [tasksToDisplay, setTasksToDisplay] = useState()

    useEffect(() => {

        if (seletectedFilter === "all") {
            setTasksToDisplay(tasks)
        } else {
            setTasksToDisplay(
                tasks.filter(task => task.completed === true)
            )
        }

    }, [setTasksToDisplay, seletectedFilter, tasks])

    return (
        <section
            className="tasks-section">

            <label
                htmlFor="tasks">
                {"Tasks"}
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

            <div className="tasks-container">
                {
                    tasksToDisplay.length > 0 &&
                    <div className="filter-container">

                        <label htmlFor="tasks-filter">
                            {"Filter Tasks"}
                        </label>

                        <select
                            name="tasks-filter" id="tasks-filter"
                            value={seletectedFilter}
                            onChange={e => setSelectedFilter(e.target.value)}>

                            <option value="all">
                                {"All"}
                            </option>

                            <option value="completed">
                                {"Completed"}
                            </option>

                        </select>

                    </div>
                }

                {tasks.length === 0 && <p> You have no task/s on this project. </p>}

                <ul
                    className="tasks"
                    id="tasks">

                    {
                        tasksToDisplay.length > 0 &&
                        tasksToDisplay?.map((task, idx) => {
                            return (
                                <li
                                    className={task.completed ? "task completed" : "task"}
                                    key={task.id} >

                                    <span className="numbering">
                                        {idx + 1}.
                                    </span>

                                    <span className="task-text">
                                        {task.title}
                                    </span>

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
            </div>

        </section>
    )
}

export default Tasks
