import Button from "./Button"
import Projects from "./Projects"

const Sidebar = ({ projects, selectedProjectId, handleSelectActiveProject, handleAddCreateProject}) => {
    return (
        <aside className="sidebar">
            <div className="sidebar_top">
                <h1 className="sidebar_label">
                    Projects
                </h1>
                <Button buttonText={"Add Projects"} onClick={handleAddCreateProject}/>
            </div>
            <Projects
                projects={projects}
                selectedProjectId={selectedProjectId}
                handleSelectActiveProject={handleSelectActiveProject} />
        </aside>
    )
}

export default Sidebar

