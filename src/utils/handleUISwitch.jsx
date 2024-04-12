import NoSelectedProject from "../components/NoSelectedProject";
import SelectedProject from "../components/SelectedProject";
import ProjectForm from '../components/ProjectForm';

function handleUISwitch(selectedProject, project, handleAddCreateProject, handleCreateProject) {

    let uiContent
    if (project.selectedProjectId === 'not creating') {
        uiContent = <NoSelectedProject handleAddCreateProject={handleAddCreateProject} > </NoSelectedProject>
    } else if (project.selectedProjectId === 'creating') {
        uiContent = <ProjectForm handleCreateProject={handleCreateProject} > </ProjectForm>
    } else {
        uiContent = <SelectedProject selectedProject={selectedProject} > </SelectedProject>
    }

    return uiContent
}
export default handleUISwitch
