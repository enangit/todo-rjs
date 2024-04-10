/* eslint-disable no-unused-vars */
import { useState } from 'react'

import './App.css'
import Sidebar from './components/Sidebar'

const DUMMY_DATA = [
    { title: "Project 1", id: 1 },
    { title: "Project 2", id: 2 },
    { title: "Project 3", id: 3 },
    { title: "Project 4", id: 4 },
]
function App() {

    const [projectState, setProjectState] = useState({
        selectedProjectId: 1,
        projects: [],
        tasks: [],
    })

    let selectedProject;

    selectedProject = projectState.projects.filter(project => project.id === projectState.selectedProjectId)

    function handleSelectActiveProject(id) {
        console.log(id)
        setProjectState(prevState => {
            return {
                ...prevState,
                selectedProjectId: id,
            }
        })
    }

    return (
        <>
            <Sidebar
                selectedProjectId={projectState.selectedProjectId}
                projects={DUMMY_DATA}
                handleSelectActiveProject={handleSelectActiveProject} />
            <main>

            </main>
        </>
    )
}

export default App
