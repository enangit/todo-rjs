/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'

import './App.css'
import Sidebar from './components/Sidebar'
import handleUISwitch from './utils/handleUISwitch'

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

    function handleCreateProject(data) {

        let projectName = data.projectNameRef.current.value
        let projectDescription = data.projectDescriptionRef.current.value

        if (projectName === "" || projectDescription === "") {
            return
        }

        let newProject = {
            projectId: (Math.random()).toString().slice(3, -1),
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

    let selectedProject;
    let content;

    function handleSelectActiveProject(id) {
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: id,
            }
        })
    }

    selectedProject = projectState.projects.filter(project => project.projectId === projectState.selectedProjectId)[0]

    content = handleUISwitch(selectedProject, projectState, handleAddCreateProject, handleCreateProject)

    return (
        <>
            <Sidebar
                selectedProjectId={projectState.selectedProjectId}
                projects={projectState.projects}
                handleAddCreateProject={handleAddCreateProject}
                handleSelectActiveProject={handleSelectActiveProject} />

            <main>
                {content}
            </main>
        </>
    )
}

export default App
