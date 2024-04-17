import NoSelectedProject from "../components/NoSelectedProject";
import SelectedProject from "../components/SelectedProject";
import ProjectForm from '../components/ProjectForm';
import { useContext } from "react";
import { AppContext } from "./ContextPorvider";

function HandleUiSwitch() {

    const { selectedProjectId } = useContext(AppContext)

    let uiContent

    if (selectedProjectId === 'not creating' || selectedProjectId === undefined) {
        uiContent = <NoSelectedProject />
    } else if (selectedProjectId === 'creating') {
        uiContent = <ProjectForm />
    } else {
        uiContent = <SelectedProject />
    }

    return uiContent
}
export default HandleUiSwitch
