import NoSelectedProject from "../components/NoSelectedProject";
import SelectedProject from "../components/SelectedProject";
import ProjectForm from '../components/ProjectForm';

function handleUISwitch(
    selectedProject,
    selectedProjectId,
    handleAddCreateProject,
    handleCreateProject,
    addTask,
    selectedProjectTasks,
    deleteTask) {

    let uiContent

    if (selectedProjectId === 'not creating') {
        uiContent = <NoSelectedProject
            handleAddCreateProject={handleAddCreateProject} />
    } else if (selectedProjectId === 'creating') {
        uiContent = <ProjectForm
            handleCreateProject={handleCreateProject} />
    } else {
        uiContent = <SelectedProject
            selectedProject={selectedProject}
            addTask={addTask}
            tasks={selectedProjectTasks}
            deleteTask={deleteTask} />
    }

    return uiContent
}
export default handleUISwitch
