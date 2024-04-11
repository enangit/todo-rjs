const SelectedProject = ({ selectedProject }) => {
    return (
        <section className="selected-project">
            <div>
                <h2 className="selected-project-name">
                    {selectedProject.name}
                </h2>
                <span className="created-at">
                    {selectedProject.createdAt}
                </span>
            </div>
            <div>
                {selectedProject.description}
            </div>
        </section>
    )
}

export default SelectedProject
