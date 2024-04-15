import { useContext } from "react"
import { AppContext } from "../utils/AppContextPorvider"

const Projects = () => {

    const {projects, selectedProjectId, handleSelectActiveProject, deleteProject} = useContext(AppContext)

    let activeClass = "project"

    return (
        <ul role="list" className="projects">

            {!projects && <></>}

            {
                projects && projects.map((project) => {

                    if (project.id === selectedProjectId) {
                        activeClass += " active"
                    } else {
                        activeClass = "project"
                    }

                    return <li
                        id="project-li"
                        key={project.id}
                        className={activeClass}
                    >

                        <p
                            id="project-span"
                            onClick={() => {
                                handleSelectActiveProject(project.id)
                            }}>
                            {project.name}
                        </p>

                        <button
                            className="delete"
                            onClick={deleteProject}
                        >
                            Del
                        </button>

                    </li>
                })
            }

        </ul>
    )
}

export default Projects
