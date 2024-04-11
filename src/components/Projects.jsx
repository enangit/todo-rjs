const Projects = ({ projects, selectedProjectId, handleSelectActiveProject }) => {

    let activeClass = "project"

    return (
        <ul role="list" className="projects">

            {!projects && <> </>}

            {
                projects && projects.map((project) => {

                    if (project.projectId === selectedProjectId) {
                        activeClass += " active"
                    } else {
                        activeClass = "project"
                    }

                    return <li
                        key={project.projectId}
                        className={activeClass}
                        onClick={() => {
                            handleSelectActiveProject(project.projectId)
                        }}
                    >
                        <button>
                            {project.name}
                        </button>
                    </li>
                })
            }

        </ul>
    )
}

export default Projects
