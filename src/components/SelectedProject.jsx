import { FaTrashCan } from "react-icons/fa6";
import Tasks from "./Tasks"
import { useContext } from "react";
import { AppContext } from "../utils/AppContextPorvider";

const SelectedProject = () => {

    const { selectedProject, deleteProject } = useContext(AppContext)

    const date = selectedProject[0]?.createdAt.slice(0, 24)

    return (
        <section
            className="section selected-project">
            <div>
                <div
                    className="selected-project-top">
                    <div
                        className="details-div">
                        <h2
                            className="name"
                            id="name">
                            {selectedProject[0]?.name}
                        </h2>
                        <span
                            id="date"
                            className="date">
                            {date}
                        </span>
                    </div>

                    <div
                        className="action-div">
                        <button
                            className="button delete-project-button"
                            onClick={deleteProject}
                        >
                            <FaTrashCan
                                className="icon"
                            />
                        </button>
                    </div>
                </div>
                <div
                    className="description">
                    {selectedProject[0]?.description}
                </div>
            </div>


            <div className="selected-project-bottom">
                <Tasks />
            </div>

        </section>
    )
}

export default SelectedProject
