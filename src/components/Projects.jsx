const Projects = ({ projects, selectedProjectId, handleSelectActiveProject }) => {

    let activeClass = "project"

    return (
        <ul role="list" className="projects">

            {!projects && <> </>}

            {
                projects && projects.map((project) => {

                    if (project.id === selectedProjectId) {
                        activeClass += " active"
                    } else {
                        activeClass = "project"
                    }

                    return <li
                        key={project.id}
                        className={activeClass}
                        onClick={() => {
                            handleSelectActiveProject(project.id)
                        }}
                    >
                        <button>
                            {project.title}
                        </button>
                    </li>
                })
            }

        </ul>
    )
}

export default Projects
