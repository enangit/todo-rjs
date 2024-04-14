/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'

import './App.css'
import Sidebar from './components/Sidebar'
import NoSelectedProject from "./components/NoSelectedProject";
import SelectedProject from "./components/SelectedProject";
import ProjectForm from './components/ProjectForm';

function App() {

    const savedProjects = JSON.parse(localStorage.getItem("projects"))
    const savedTasks = JSON.parse(localStorage.getItem("tasks"))

    const [projectState, setProjectState] = useState({
        selectedProjectId: 'not creating',
        projects: savedProjects || [],
        tasks: savedTasks || [],
    })

    //useEffect to save projects and tasks to a localtStorage || database

    useEffect(() => {
        function saveProjectToDatabase(projects) {
            localStorage.setItem("projects", JSON.stringify(projects))
        }

        saveProjectToDatabase(projectState.projects)
    }, [projectState.projects])

    useEffect(() => {
        function saveTasksToDatabase(tasks) {
            localStorage.setItem("tasks", JSON.stringify(tasks))
        }
        saveTasksToDatabase(projectState.tasks)
    }, [projectState.tasks])

    function handleAddCreateProject() {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: 'creating',
            }
        })
    }

    function cancelCreateProject() {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: 'not creating',
            }
        })
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

        setProjectState(prevState => {
            return {
                ...prevState,
                projects: [...prevState.projects, newProject],
                selectedProjectId: 'not creating',
            }
        })

    }

    function addTask(inputRef) {

        if (inputRef.current.value === "") return

        const newTask = {
            projectId: projectState.selectedProjectId,
            id: (Math.random()).toString().slice(3, -1),
            title: inputRef.current.value,
        }

        setProjectState(prevState => {
            return {
                ...prevState,
                tasks: [...prevState.tasks, newTask],
            }
        })

        inputRef.current.value = ""

    }

    function deleteProject() {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: 'not creating',
                projects: [...prevState.projects.filter(project => project.id !== projectState.selectedProjectId)],
                tasks: [...prevState.tasks.filter(task => task.projectId !== projectState.selectedProjectId)],
            }
        })
    }

    function deleteTask(taskId) {
        setProjectState(prevState => {
            return {
                ...prevState,
                tasks: prevState.tasks
                    .filter(task => task.id !== taskId)
            }
        })
    }

    let selectedProject;
    let selectedProjectTasks;

    selectedProject = projectState.projects.filter(project => project.id === projectState.selectedProjectId)
    selectedProjectTasks = projectState.tasks.filter(task => task.projectId === projectState.selectedProjectId)

    function handleSelectActiveProject(id) {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: id,
            }
        })
    }

    let uiContent

    if (projectState.selectedProjectId === 'not creating') {
        uiContent = <NoSelectedProject
            handleAddCreateProject={handleAddCreateProject}
        />
    } else if (projectState.selectedProjectId === 'creating') {
        uiContent = <ProjectForm
            handleCreateProject={handleCreateProject}
            cancelCreateProject={cancelCreateProject} />
    } else {
        uiContent = <SelectedProject
            selectedProject={selectedProject}
            addTask={addTask}
            tasks={selectedProjectTasks}
            deleteTask={deleteTask}
            deleteProject={deleteProject} />
    }

    return (
        <>
            <Sidebar
                selectedProjectId={projectState.selectedProjectId}
                projects={projectState.projects}
                handleAddCreateProject={handleAddCreateProject}
                handleSelectActiveProject={handleSelectActiveProject}
                deleteProject={deleteProject}
            />

            <main>
                {uiContent}
            </main>
        </>
    )
}

export default App
