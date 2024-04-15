import { useEffect, useReducer } from 'react'

import './App.css'
import Sidebar from './components/Sidebar'
import AppContextProvider from './utils/AppContextPorvider';
import HandleUiSwitch from './utils/HandleUiSwitch';

import reducer from './utils/reducer';

function App() {

    const savedProjects = JSON.parse(localStorage.getItem("projects"))
    const savedTasks = JSON.parse(localStorage.getItem("tasks"))
    const savedLastSelectedProjectId = JSON.parse(localStorage.getItem("lastSelectedProjectId"))

    const [state, dispatch] = useReducer(reducer, {
        selectedProjectId: savedLastSelectedProjectId || 'not creating',
        projects: savedProjects || [],
        tasks: savedTasks || [],
    })

    //useEffect to save projects and tasks to a localtStorage || database

    useEffect(() => {
        function saveProjectToDatabase(projects) {
            localStorage.setItem("projects", JSON.stringify(projects))
        }

        saveProjectToDatabase(state.projects)
    }, [state.projects])

    useEffect(() => {
        function saveTasksToDatabase(tasks) {
            localStorage.setItem("tasks", JSON.stringify(tasks))
        }
        saveTasksToDatabase(state.tasks)
    }, [state.tasks])

    useEffect(() => {
        function saveTasksToDatabase(lastSelectedProjectId) {
            if (lastSelectedProjectId === 'not creating' || lastSelectedProjectId === 'creating') {
                return
            } else {
                localStorage.setItem("lastSelectedProjectId", JSON.stringify(lastSelectedProjectId))
            }
        }
        saveTasksToDatabase(state.selectedProjectId)
    }, [state.selectedProjectId])

    function handleAddCreateProject() {
        dispatch({ type: 'handleAddCreateProject' })
    }

    function cancelCreateProject() {
        dispatch({ type: 'cancelCreateProject' })
    }

    function handleCreateProject(inputEl) {

        let projectName = inputEl.projectNameRef.current.value
        let projectDescription = inputEl.projectDescriptionRef.current.value

        if (projectName === "" || projectDescription === "") {
            return
        }

        let newProject = {
            id: (Math.random()).toString().slice(3, -1),
            name: projectName,
            description: projectDescription,
            createdAt: new Date().toString(),
        }

        dispatch({ type: 'handleCreateProject', payload: newProject })

    }

    function addTask(inputRef) {

        if (inputRef.current.value === "") return

        const newTask = {
            projectId: state.selectedProjectId,
            id: (Math.random()).toString().slice(3, -1),
            title: inputRef.current.value,
            completed: false,
        }

        dispatch({ type: 'addTask', payload: newTask })

        inputRef.current.value = ""

    }

    function deleteProject() {
        dispatch({ type: 'deleteProject' })
    }

    function deleteTask(taskId) {
        dispatch({ type: 'deleteTask', payload: taskId })
    }

    let selectedProject = state.projects.filter(project => project.id === state.selectedProjectId)
    let selectedProjectTasks = state.tasks.filter(task => task.projectId === state.selectedProjectId)

    function handleSelectActiveProject(projectId) {
        dispatch({ type: 'handleSelectActiveProject', payload: projectId })
    }

    function handleCompleteTask(taskId) {
        dispatch({ type: 'handleCompleteTask', payload: taskId })
    }

    let appContextProviderValues = {
        selectedProject,
        selectedProjectId: state.selectedProjectId,
        selectedProjectTasks,
        handleCreateProject,
        handleAddCreateProject,
        addTask,
        deleteTask,
        cancelCreateProject,
        projects: state.projects,
        deleteProject,
        handleSelectActiveProject,
        handleCompleteTask,
    }

    let content = <HandleUiSwitch />

    return (
        <>
            <AppContextProvider value={appContextProviderValues}>
                <Sidebar />
                <main>
                    {content}
                </main>
            </AppContextProvider>
        </>
    )
}

export default App
